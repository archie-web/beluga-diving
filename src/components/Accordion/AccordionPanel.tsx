// this is depreciated and will be removed in the future

import { useState } from 'react';
import AccordionButton from './AccordionButton';

interface AccordionPanelProps {
   title: string;
   bodyContent: string;
}

import parse from 'html-react-parser';

const AccordionPanel: React.FC<AccordionPanelProps> = ({
   title,
   bodyContent,
}) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="">
         <AccordionButton
            isOpen={isOpen}
            title={title}
            onClick={() => setIsOpen(!isOpen)}
         />

         <div
            className={`wysiwyg no-pattern flex flex-col gap-6 px-4 pb-10 pt-4 leading-none ${
               isOpen ? 'block border-b-2 border-secondaryColour' : 'hidden'
            }`}
         >
            {parse(bodyContent)}
         </div>
      </div>
   );
};

export default AccordionPanel;
