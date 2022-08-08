import { useState } from "react";

import './AccordionSection.css';

interface AccordionSectionProps {
  title: string;
  content: string;
}

const AccordionSection = ({ title, content }: AccordionSectionProps) => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="accordion-section">
      <div className="accordion-title" onClick={() => setDisplay(!display)}>
        <h2>{title}</h2>
        {display
          ? <span className='accordion-icon'>-</span>
          : <span className='accordion-icon'>+</span>}
      </div>
      {display &&
        <div className="accordion-content">
          <p>{content}</p>
        </div>}
    </div>
  );
}


export default AccordionSection;
