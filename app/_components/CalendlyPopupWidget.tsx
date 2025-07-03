import { PopupModal } from 'react-calendly';

const CalendlyPopupWidget = ({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

  var domNode = document && document.getElementById('_root');
  if (domNode == null)
  {
    throw Error("failed to retrieve dom node for calendly popup widget");
  }

  return (
    <div>
      <PopupModal
        url='https://calendly.com/john_geria/15min'
        onModalClose={() => setOpen(false)}
        open={open}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement= {domNode}
      />
    </div>
  );
}

export default CalendlyPopupWidget;
