import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/images/light_logo.png';
import FacebookIcon from '@/public/icons/facebook.svg';
import TwitterIcon from '@/public/icons/twitter.svg';
import InstagramIcon from '@/public/icons/instagram.svg';
import LinkedinIcon from '@/public/icons/linkedin.svg';

const Footer = () => {

  return (

<div className="bg-white flex flex-col items-stretch">
      <div className="bg-stone-900 w-full mt-70 pl-20 pr-10 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-1.5 max-md:mt-10">
              <Image
              alt='logo picture'
                loading="lazy"
                //objectFit='contain'
                width={50}
                height={50}
                //style={{objectFit:"cover"}}
                src="https://geriasa.blob.core.windows.net/assets/69bf00ea_4ffb_4ed1_8405_ed28f2daef2f_956adcf9bf.png"
                className="aspect-[2.35] object-contain object-center w-20 overflow-hidden max-w-full self-start"
              />
             <div className="text-white text-justify text-base leading-7 self-stretch mt-2.5 tracking-tighter">
  Build great products with top-vetted remote developer teams
  faster and cost-effectively.
</div>

              <div className="items-center flex justify-between gap-2.5 mt-8 self-start">
                <Image
                alt=''
                  loading="lazy"
                  width={50}
                  height={50}
                  //style={{objectFit:"cover"}}
                  unoptimized
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/26ec2fda-89ce-4b27-a164-82399d481280?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                  className="aspect-square object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-white text-base leading-7 opacity-80 self-stretch whitespace-nowrap">
                  hello@geria.com
                </div>
              </div>
              <div className="items-center flex justify-between gap-2.5 mt-1 self-start">
                <Image
                alt='none'
                  loading="lazy"
                  width={50}
                  height={50}
                  //style={{objectFit:"cover"}}
                  unoptimized
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/624f4f73-0ec2-444d-865c-134b447de03b?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                  className="aspect-square object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-white text-base leading-7 opacity-80 self-stretch whitespace-nowrap">
                  +44 115 822 8222
                </div>
              </div>
              <div className="items-stretch self-stretch flex justify-between gap-5 mt-9 max-md:justify-center">
              <Link href='https://web.facebook.com/www.geria.io' target='_blank' className='mr-5'>
                <Image
                  alt='facebook logo'
                  loading="lazy"
                  width={50}
                  height={50}
                  //style={{objectFit:"cover"}}
                  unoptimized
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4baf627-accc-4542-ba3b-733ec44698e3?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                  className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full"
                />
                </Link>
                <Link href='https://twitter.com/geria_io' target='_blank' className='mr-5'>
                <Image
                  alt='twitter logo'
                  loading="lazy"
                  width={50}
                  height={50}
                  //style={{objectFit:"cover"}}
                  unoptimized
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c1d7950-50ac-4a0b-b389-a8c6dbe3831a?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                  className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full"
                />
                </Link>

               <Link href='https://www.linkedin.com/company/geria-io/' target='_blank' className='mr-5'>
                <Image
                  alt='linked in logo'
                  loading="lazy"
                  width={50}
                  height={50}
                  //style={{objectFit:"cover"}}
                  unoptimized
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bee03ba-18f0-416e-aae2-02074cf93558?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                  className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full"
                />
                </Link>
                <Link href='https://www.instagram.com/geria_io/' target='_blank' className='mr-5'>
                <Image
                  alt='instagram logo'
                  loading="lazy"
                  width={50}
                  height={50}
                  //style={{objectFit:"cover"}}
                  unoptimized
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7655f037-5ddc-43d5-bd22-faed6f861cd8?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                  className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full"
                />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
            <div className="mt-1.5 max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[73%] max-md:w-full max-md:ml-0">
                  <div className="max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex grow flex-col max-md:mt-10">

                          <div className="text-white text-2xl font-semibold leading-7 whitespace-nowrap">
                            Site Map
                          </div>
                          <div className="text-slate-50 text-base font-medium leading-7 mt-5">
                          <Link href='/about-us'>About us</Link>
                          </div>
                          <div className="text-slate-50 text-base font-medium leading-7 mt-2">
                          <Link href='/pricing'>Pricing</Link>
                          </div>
                          <div className="text-slate-50 text-base font-medium leading-7 mt-2">
                          <Link href='/blog'>Blog</Link>
                          </div>
                          <div className="text-slate-50 text-base font-medium leading-7 mt-2">
                          <Link href='/our-process'>Our Process</Link>
                          </div>
                          {/* <div className="text-slate-50 text-base font-medium leading-7 mt-2">
                          <Link href='/jobs'>Apply For Jobs</Link>
                          </div> */}
                          <div className="text-slate-50 text-base font-medium leading-7 whitespace-nowrap mt-2">
                            Web Development
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col max-md:mt-10">
                          <div className="text-white text-2xl font-semibold leading-7 whitespace-nowrap">
                            Positions
                          </div>
                          <div className="text-slate-50 text-base font-medium leading-7 whitespace-nowrap mt-5">
                            Product Designer
                          </div>
                          <div className="text-slate-50 text-base font-medium leading-7 whitespace-nowrap mt-2">
                            Front End Developer
                          </div>
                          <div className="text-slate-50 text-base font-medium leading-7 whitespace-nowrap mt-2">
                            Back End Developer
                          </div>
                          <div className="text-slate-50 text-base font-medium leading-7 whitespace-nowrap mt-2">
                            Full Stack Developer
                          </div>
                          <div className="text-slate-50 text-base font-medium leading-7 whitespace-nowrap mt-2">
                            Data Scientist
                          </div>
                          <div className="text-slate-50 text-base font-medium leading-7 whitespace-nowrap mt-2">
                            Wordpress Developer
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col max-md:mt-10">
                          <div className="text-white text-2xl font-semibold leading-7 whitespace-nowrap">
                            Legal
                          </div>
                          <div className="text-slate-50 text-base font-medium leading-7 whitespace-nowrap mt-5">
                          <Link href='/privacy-policy'>Privacy policy</Link>
                          </div>
                          <div className="text-slate-50 text-base font-medium leading-7 whitespace-nowrap mt-2">
                          <Link href='/cookies-policy'>Cookies Policy</Link>
                          </div>
                          <div className="text-slate-50 text-base font-medium leading-7 whitespace-nowrap mt-2">
                          <Link href='/terms'>Terms & conditions</Link>
                          </div>
                          <div className="text-slate-50 text-base font-medium leading-7 whitespace-nowrap mt-2">
                          <Link href='/slavery-statement'>Modern Slavery Statement</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:mt-10">
                    <div className="text-white text-2xl font-semibold leading-7 whitespace-nowrap">
                      Contacts
                    </div>
                    <div className="items-stretch flex flex-col mt-5">
                      <div className="text-slate-50  text-base leading-7 opacity-80">
                        United Kingdom
                      </div>
                      <div className="text-slate-50 text-base font-medium leading-7 mt-1">
                        16c Ingenuity Centre,
                        <br />
                        Triumph Road, Nottingham,
                        <br />
                        United Kingdom NG7 2TU
                      </div>
                    </div>
                    <div className="items-stretch flex flex-col mt-5">
                      <div className="text-slate-50  text-base leading-7 opacity-80">
                        Nigeria
                      </div>
                      <div className="text-slate-50 text-base font-medium leading-7 mt-1">
                        1A, Hughes Avenue,
                        <br />
                        Off Herbert Macaulay Road,
                        <br />
                        Yaba, Lagos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer