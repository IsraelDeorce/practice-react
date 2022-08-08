/*
4. Build Accordion in React (collapsible content)
Creating an accordion that toggles text content on click of the accordion header using React State and conditional rendering.

The following are the steps to create an accordion in React JS:
1.Display every title of accordion with body.
2.Hide every accordion body using element.display = none;
3.Toggle visibility of accordion body on click of title.
*/
import { useState } from 'react';
import AccordionSection from '../../components/AccordionSection/AccordionSection';

function Accordion() {
  const [sections] = useState([
    { title: 'Section 1', content: 'Lorem ipsum dolor sit amet...1' },
    { title: 'Section 2', content: 'Lorem ipsum dolor sit amet...2' },
    { title: 'Section 3', content: 'Lorem ipsum dolor sit amet...3' },
    { title: 'Section 4', content: 'Lorem ipsum dolor sit amet...4' }
  ]);

  
  return (
    <div className="Accordion">
      {sections.map((s, i) => <AccordionSection title={s.title} content={s.content} /> )}
    </div>
  )
}

export default Accordion;
