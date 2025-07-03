import { useCalendlyEventListener, InlineWidget } from 'react-calendly';

interface CalendlyProps {
    setScheduled: (scheduled: boolean) => void;
  }

const Calendly: React.FC<CalendlyProps> = ({ setScheduled }) => {

  useCalendlyEventListener({
    onEventScheduled: (e) => setScheduled(true),
  });

  return (
    <div>
      <InlineWidget
        url='https://calendly.com/john_geria/15min'
      />
    </div>
  );
}

export default Calendly;
