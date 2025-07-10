
import Image from 'next/image';
import Link from 'next/link';
import { DeveloperAvatar } from '../_models/developerAvatar.model';

const TalentCard = ( { dev }: { dev: DeveloperAvatar }) => {

  const {
    avatarUrl,
    name,
    location,
    experience,
    skills,
    timeZone,
  } = dev;
  const firstName = name.split(' ')[0];
  const renderSkills = (skills: string[]) => skills.map((skill, idx) =>
  (
    <span
      key={idx}
      className={`bg-sky-100 px-3 py-1 rounded-full text-fluid-xs ${idx < skills.length - 1 ? 'mr-3' : ''}`}
    >
      {skill}
    </span>
  ));

  return (
    <div className='mx-auto p-5 rounded-2xl bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] border border-[#E1ECF0] max-w-[405px]'>
      <div className=''>
        <Image
          className='mb-fluid-3'
          src={avatarUrl}
          height={400}
          width={400}
          alt='Avatar'
        />
        <h3 className='text-fluid-md mb-3'>{name}</h3>
        <div className='mb-3'>
          <p className=''>{location}</p>
          <p className='text-fluid-sm'>{timeZone}</p>
        </div>
        <div className='mb-2'>
          <p className='text-slate-400'>Experience</p>
          <p className=''>{experience}</p>
        </div>
        <div className='mb-fluid-5'>
          <p className='text-slate-400'>Skills</p>
          {renderSkills(skills)}
        </div>
        <Link className='btn-secondary' href='/hire-talent'>
          Hire {firstName}
        </Link>
      </div>
    </div>
  )
}

export default TalentCard
