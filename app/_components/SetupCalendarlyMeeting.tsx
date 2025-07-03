import Link from 'next/link';

import Calendly from '../_components/Calendly';
import SelectButton from '../_components/SelectButton';
import React from 'react';


interface SetupCalendarlyMeetingProps {
    setScheduled: (scheduled: boolean) => void;
  }

const SetupCalendarlyMeeting: React.FC<SetupCalendarlyMeetingProps> = ({ setScheduled }) => {

  return (
    <>
      <p className='py-3'>Let’s schedule a call to know more about your needs</p>

      <Calendly
        setScheduled={setScheduled}
      />

      <p>I understand that Geria will process my information in accordance with their <Link href={'/privacy-policy'}>Privacy Policy</Link>. I may withdraw my consent through unsubscribe links at any time.</p>
    </>
  )
};

export default SetupCalendarlyMeeting;
