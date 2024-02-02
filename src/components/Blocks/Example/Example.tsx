import React from 'react';
import parse from 'html-react-parser';
import NextLink from '@components/NextLink';

const stringArray = ['item1', 'item2', 'item3'];
const numberArray = [1, 2, 3];
const multiTypeArray = {
   tagline: '<b>tagline text</b>',
   bodyAdvanced:
      '<p>Two to three lines of text, Sit neque facilisis pharetra morbi platea elementum. Elementum felis imperdiet feugiat montes ut velit interdum lobortis erat. Nulla massa porta suspendisse!</p>',
   linkField: {
      text: 'text link',
      url: '/',
   },
};

interface Props {
   data: {
      tagline: string;
      bodyAdvanced: string;
      linkField?: {
         text: string;
         url: string;
      };
   };
}

function GernericType({ data }: Props) {
   // console.log(typeof data);
   return (
      <ul>
         {/* {data.map((item: string) => (
                <li key={item}>{item}</li>
            ))} */}
         <li>{data.tagline}</li>
         {parse(data.bodyAdvanced)}
         {data.linkField && (
            <NextLink href={data.linkField.url}>{data.linkField.text}</NextLink>
         )}
      </ul>
   );
}

function calc(x: number, y = 1): number {
   return x + y;
}

export const Example = ({ className = '' }) => {
   const xyz = calc(1, 2);
   // console.log(xyz.toFixed(2));
   return (
      <>
         <GernericType data={multiTypeArray} />
         <h3 className={`test ${className}`} data-testid="test">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            ducimus atque est.
         </h3>
      </>
   );
};

// generic type
function MergeType<T, U>(obj1: T, obj2: U) {
   return {
      ...obj1,
      ...obj2,
   };
}
