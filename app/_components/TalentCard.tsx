import Image from 'next/image';
import Link from 'next/link';
import { DeveloperAvatar } from '../_models/developerAvatar.model';

interface TalentCardProps {
  dev: DeveloperAvatar;
}

export default function TalentCard({ dev }: TalentCardProps) {
  if (!dev) {
    return null;
  }

  const skills = Array.isArray(dev.skills) ? dev.skills : [];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full mr-4">
          {dev.avatarUrl && (
            <Image
              src={dev.avatarUrl}
              alt={dev.name || 'Developer'}
              width={64}
              height={64}
              className="rounded-full"
            />
          )}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{dev.name || 'Developer'}</h3>
          <p className="text-sm text-gray-500">{dev.location || 'Remote'}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600">{dev.experience || 'Experienced Developer'}</p>
        <p className="text-xs text-gray-500">{dev.timeZone || 'Flexible timezone'}</p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

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
