import Link from 'next/link';
import postsJson from "../posts.json"; 
 
export default function Page({ params }: { params: { id: string } }) {

  var { posts } = postsJson;

  // Find the post with the matching id
  const post = posts.find((p: { id: number; }) => p.id === Number(params.id));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>

    <div className="bg-white flex flex-col pt-20">
      <div className="bg-white self-stretch flex w-full flex-col px-20 py-3.5 border-b-white border-b-opacity-30 border-b border-solid max-md:max-w-full max-md:px-5" />
      <div className="self-center flex w-full max-w-[1263px] flex-col mt-9 max-md:max-w-full">
        <div className="items-start flex w-16 max-w-full gap-1.5 px-5 self-start">
        </div>
        <div className="justify-center items-center self-center flex w-full flex-col mt-8 px-5 max-md:max-w-full">
          <div className="items-start self-stretch flex flex-col -mr-5 max-md:max-w-full">
            <div className="text-stone-900 text-3xl font-semibold leading-10 self-start max-md:max-w-full">
            {post.title}
            </div>
            <div className="items-start flex w-[184px] max-w-full grow flex-col mt-2.5 self-start">
              <div className="items-start self-stretch flex justify-between gap-2.5 pr-px">
                <img
                  loading="lazy"
                  src={post.authorAvatarUrl}
                  alt={`${post.authorName} avatar`}
                  className="aspect-square object-contain object-center w-[50px] overflow-hidden self-center max-w-full my-auto rounded-[50%]"
                />
                <div className="items-start self-stretch flex flex-col">
                  <div className="text-sky-700 text-xl font-semibold leading-6 self-stretch whitespace-nowrap">
                 {post.authorName}
                  </div>
                  <div className="text-neutral-600 text-base font-medium leading-6 self-stretch whitespace-nowrap mt-1">
                  {post.date}
                  </div>
                </div>
              </div>
              <div className="text-zinc-100 text-sm font-semibold self-stretch whitespace-nowrap items-start bg-rose-500 w-[130px] grow mt-2.5 px-2 py-1 rounded-[99px]">
              {post.category}
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src={post.image}
            alt={post.title}
            className="aspect-[1.5] object-center w-[401px] overflow-hidden self-center max-w-full mt-10 rounded-[5%]"
          />
          <div className="text-slate-500 text-lg leading-7 self-stretch -mr-5 mt-10 max-md:max-w-full">
          <div dangerouslySetInnerHTML={{ __html: post.longText }} />
       
          </div>
          <div className="items-start self-stretch flex grow flex-col -mr-5 mt-10 pr-20 max-md:max-w-full max-md:pr-5">
            <div className="items-start flex w-[868px] max-w-full flex-col self-start">
              <div className="items-start flex w-[148px] max-w-full justify-between gap-5 self-start">
                <div className="items-start self-stretch flex justify-between gap-1.5">
                  <div className="text-rose-500 text-xl font-semibold leading-6 self-stretch">
                    23
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/685054ac-1864-49a2-9d19-d6b6cbcd7121?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                    alt="Like icon"
                    className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                  />
                </div>
                <div className="items-start self-stretch flex justify-between gap-1.5">
                  <div className="text-sky-700 text-xl font-semibold leading-6 self-stretch">
                    10
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5320814-571a-445c-bdec-dd1724eebe90?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                    alt="Share icon"
                    className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                  />
                </div>
              </div>
              <div className="text-neutral-700 text-xl font-semibold leading-8 whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
                Leave a reply
              </div>
              <div className="text-zinc-500 text-lg font-medium whitespace-nowrap items-start border w-full grow mt-2.5 pl-2.5 pr-20 pt-2.5 pb-24 rounded-lg border-solid border-stone-300 self-start max-md:max-w-full max-md:pr-5">
                Type your reply
              </div>
            </div>
            <div className="text-white text-center text-sm font-bold leading-6 whitespace-nowrap justify-center items-center bg-stone-900 w-[122px] max-w-full grow mt-5 px-5 py-2.5 rounded-lg self-start max-md:px-5">
              Send Reply
            </div>
          </div>
        </div>
        <div className="items-start self-center flex w-full grow flex-col mt-40 px-5 max-md:max-w-full max-md:mt-10">
        <div className="text-stone-900 text-5xl font-semibold leading-[52.8px] sm: px-5 self-stretch whitespace-nowrap -mr-5 max-md:max-w-full max-md:text-4xl">
        Related News
        </div>





          <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

    
      {posts.map((post) => (
       <div className="m-3" key={post.id}>
       <Link as={`/blog/${post.id}`} href="/blog/[id]">
      
       <div className="items-start flex grow flex-col max-md:mt-5 transform transition duration-300 ease-in-out hover:scale-105">
  <img
    loading="lazy"
    src={post.image}
    alt={post.title}
    className="aspect-[1.18] object-center w-full overflow-hidden self-stretch rounded-[10%]"
  />
  <div className="items-start self-stretch flex grow flex-col mt-5">
    <div className="self-stretch text-violet-500 text-sm font-semibold leading-6">
      {post.category}
    </div>
    <div className="self-stretch text-stone-900 text-2xl font-semibold leading-7 mt-2.5">
      {post.title}
    </div>
    <div className="self-stretch text-slate-500 text-base font-medium leading-6 mt-2.5">
      {post.previewText}
    </div>
    <div className="items-start content-start flex-wrap self-stretch flex justify-between gap-5 mt-2.5">
      <div className="flex flex-col grow shrink-0 basis-auto w-[282px] self-end">
        <div className="text-neutral-600 text-xs font-semibold leading-4 self-stretch whitespace-nowrap items-start bg-zinc-300 w-full px-1.5 py-0.5 rounded-xl">
          3 min read
        </div>
        <div className="text-slate-500 text-sm font-semibold leading-6 self-stretch whitespace-nowrap mt-2.5">
          {post.date}
        </div>
      </div>
      <div className="text-slate-500 text-sm font-semibold leading-6 whitespace-nowrap mt-8 self-end">
        9:30am
      </div>
    </div>
  </div>
</div>

        
       </Link>
       </div>

   ))}

      </div>
    </div>
   










      
        </div>
      </div>
    </div>










    </>










  );
  }