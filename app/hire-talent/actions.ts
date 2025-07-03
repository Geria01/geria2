//"use server";
'use client';
 
import { permanentRedirect } from 'next/navigation'
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { EmailClient, KnownEmailSendStatus } from '@azure/communication-email';

export async function submitForm(
  prevState: {
    message: string;
    formSubmitted: boolean;
  },
  formData: FormData,
) {
    const schema = z.object({
    hiringCompany: z.string().optional(),
    contactName: z.string().min(2),
    email: z.string().min(2),
    needs: z.string().optional()
  });

  const parse = schema.safeParse({
    hiringCompany: formData.get("hiringCompany"),
    contactName: formData.get("contactName"),
    email: formData.get("email"),
    needs: formData.get("needs")
  });

  if (!parse.success) {
    return { 
        message: "invalid form",
        formSubmitted: false
    };
  }

  const data = parse.data;

  try {
    console.log('submitting form', data);
    console.log(sendEmail(data));
    //revalidatePath("/");

    //permanentRedirect(`/`)
    return {
        message: 'success woop',
        formSubmitted: true
    };
    
  } catch (e) {
    console.log('exeception', e);
    return {
        message: 'failed',
        formSubmitted: false
     };
  }
}

// export async function deleteTodo(
//   prevState: {
//     message: string;
//   },
//   formData: FormData,
// ) {
//   const schema = z.object({
//     id: z.string().min(1),
//     todo: z.string().min(1),
//   });
//   const data = schema.parse({
//     id: formData.get("id"),
//     todo: formData.get("todo"),
//   });

//   try {
//     await sql`
//       DELETE FROM todos
//       WHERE id = ${data.id};
//     `;

//     revalidatePath("/");
//     return { message: `Deleted todo ${data.todo}` };
//   } catch (e) {
//     return { message: "Failed to delete todo" };
//   }
// }


async function sendEmail(data: {
  contactName: string;
  email: string;
  hiringCompany?: string | undefined;
  needs?: string | undefined;
}) {

  let connectionString = process.env.NEXT_PUBLIC_EMAIL_COMMUNICATION_SERVICES_CONNECTION_STRING;
  //let connectionString = process.env.NEXT_PUBLIC_EMAIL_COMMUNICATION_SERVICES_CONNECTION_STRING;

  if(connectionString === undefined)
      throw 'email connection string not found'


  let hiringCompany = data.hiringCompany;
  if (!data.hiringCompany || !data.hiringCompany.trim().length){
   hiringCompany = 'none submitted';
  }

  let needs = data.needs;
  if (!data.needs || !data.needs.trim().length){
   needs = 'none submitted';
  }

  const emailClient = new EmailClient(connectionString);

  const POLLER_WAIT_TIME = 10
  try {
    const message = {
      senderAddress: "<donotreply@79185335-6e79-485c-bf53-79b4a53026e8.azurecomm.net>",
      content: {
        subject: "Customer Contact",
        plainText: `Contact Name: ${data.contactName}, Email: ${data.email}, Hiring Company: ${hiringCompany}, Needs: ${needs}`,
        htmlContent: `<html>
          <p>Contact Name: ${data.contactName}</p>
          <p>Email: ${data.email}</p>
          <p>Hiring Company: ${data.hiringCompany}</p>
          <p>Needs: ${data.needs}</p>
          </html>`
      },
      recipients: {
        to: [
          {
            address: "<matteo@geria.io>",
            displayName: "Matteo",
          },
          {
            address: "<hello@geria.io>",
            displayName: "Hello",
          },
        ],
      },
    };

    const poller = await emailClient.beginSend(message);

    if (!poller.getOperationState().isStarted) {
      throw "Poller was not started."
    }

    let timeElapsed = 0;
    while(!poller.isDone()) {
      poller.poll();
      console.log("Email send polling in progress");

      await new Promise(resolve => setTimeout(resolve, POLLER_WAIT_TIME * 1000));
      timeElapsed += 10;

      if(timeElapsed > 18 * POLLER_WAIT_TIME) {
        throw "Polling timed out.";
      }
    }

    if(poller.getResult()?.status === KnownEmailSendStatus.Succeeded) {
      console.log(`Successfully sent the email (operation id: ${poller.getResult()?.id})`);
    }
    else {
      throw poller.getResult()?.error;
    }
  } catch (e) {
    console.log(e);
  }
}