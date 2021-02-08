import { useContext } from "react";
import { AccordionContext, useAccordionToggle } from "react-bootstrap";
import './ContextAwareToggle.css';

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  // const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      className="accordion-btn"
      type="button"
      // style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
export default ContextAwareToggle;