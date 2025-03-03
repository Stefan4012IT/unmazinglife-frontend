import React from 'react';

import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {



  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.title} index={index}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;