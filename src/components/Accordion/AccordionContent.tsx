// this is depreciated and will be removed in the future

import parse from 'html-react-parser';

interface AccordionPanelProps {
   isExpanded: boolean;
   bodyContent: string;
}

const AccordionPanel: React.FC<AccordionPanelProps> = ({
   isExpanded,
   bodyContent,
}) => (
   <div
      className={`wysiwyg no-pattern flex flex-col gap-6 px-4 pb-10 pt-4 leading-none ${
         isExpanded ? 'block border-b-2 border-secondaryColour' : 'hidden'
      }`}
   >
      {parse(bodyContent)}
   </div>
);

export default AccordionPanel;
