import { useRef, useState } from 'react';
import { formatLink } from '@/utils/formatLink';
import { Container } from '../Container';
import { twMerge } from 'tailwind-merge';
import Button from '@/components/ui/Buttons';

export const FormatLinkText = () => {
   const inputRef = useRef<HTMLInputElement | null>(null);
   const outputRef = useRef<HTMLDivElement | null>(null);
   const [output, setOutput] = useState('');

   const getValue = () => {
      const inputValue = inputRef.current?.value;
      if (inputValue) {
         setOutput(formatLink(inputValue));
      } else {
         setOutput(''); // Clear the output if the input is empty
      }
   };

   const copyValue = () => {
      const outputValue = outputRef.current?.textContent;
      if (outputValue) {
         navigator.clipboard.writeText(outputValue);
      }
   };

   const clearInput = () => {
      inputRef.current!.value = ''; // Clear the input field
      setOutput(''); // Clear the output
   };

   const focusStyles =
      'focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondaryColour';
   return (
      <form className="space-y-4 ">
         <div className="flex items-center gap-4">
            <div className="relative w-1/2">
               <input
                  type="text"
                  placeholder="Enter text"
                  ref={inputRef}
                  onChange={getValue}
                  className={twMerge(
                     'w-full max-w-xl text-ellipsis border border-gray-300 p-3 pr-8 shadow-sm dark:border-gray-700',
                     focusStyles,
                  )}
               />

               {!!output && (
                  <button
                     className={twMerge(
                        'group absolute right-2 top-1/2 flex h-6 w-6 -translate-y-3 items-center justify-center rounded-full text-xs hover:bg-black/10',
                        focusStyles,
                     )}
                     onClick={clearInput}
                  >
                     {/*---- Create a cross icon ----*/}
                     {[1, 2].map((i) => (
                        <span
                           key={i}
                           className={twMerge(
                              'absolute rotate-45 bg-black',
                              i === 1 ? 'h-[1px] w-3/5' : 'h-3/5 w-[1px]',
                           )}
                        />
                     ))}
                  </button>
               )}
            </div>
            <Button onClick={copyValue} disabled={!output}>
               Copy to clipboard
            </Button>
         </div>

         <div className="text-xl dark:text-white" ref={outputRef}>
            {output}
         </div>
      </form>
   );
};
