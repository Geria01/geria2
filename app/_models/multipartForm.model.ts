import { EducationField } from "./educationField.model";
import { ExperienceField } from "./experienceField.model";

export interface MultipartForm {
    experience: ExperienceField [];
    education: EducationField [];
    roleOptions: string [],
    experienceOptions: string [],
    hiringCompany: string,
    contactName: string,
    emailAddress: string,
    email: string,
    phoneNumber: string,
}

// export interface Values {
//     roleOptions: string[],
//     experienceOptions: string[]
//     hiringCompany: string;
//     contactName: string;
//     email: string;
//     phoneNumber: string;
// }