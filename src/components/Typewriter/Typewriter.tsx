import { useEffect, useState } from 'react';

export type TypewriterProps = {
   textArray: string[];
};

export const Typewriter: React.FC<TypewriterProps> = ({ textArray }) => {
   const [index, setIndex] = useState(0);
   const [typeIndex, setTypeIndex] = useState(0);
   const [isAdding, setIsAdding] = useState(true);

   const typingText = textArray[typeIndex].slice(0, index);

   useEffect(() => {
      const typingTimer = setTimeout(
         () => {
            if (isAdding) {
               if (index < textArray[typeIndex].length) {
                  setIndex(index + 1); // if the sentence is not yet fully typed, add a letter
               } else {
                  // if the sentence is fully typed, wait for ?? seconds and then start deleting
                  setTimeout(() => {
                     setIsAdding(false);
                  }, 3300); // wait timing
               }
            } else {
               // if the sentence is being deleted
               if (index > 0) {
                  setIndex(index - 1); // if the sentence is not yet fully deleted, delete a letter
               } else {
                  // if the sentence is fully deleted, wait for ?? seconds and then start adding
                  setTimeout(() => {
                     setIsAdding(true);
                     setTypeIndex((typeIndex + 1) % textArray.length); // go to the next sentence
                  }, 500); // wait timing
               }
            }
         },
         isAdding ? 90 : 22, // typing/deleting speed
      );
      return () => clearTimeout(typingTimer);
   }, [index, isAdding, textArray, typeIndex]);

   return (
      <div className="inline-flex items-center">
         {typingText}
         <i className="animate-blinking font-light not-italic">_</i>
      </div>
   );
};
