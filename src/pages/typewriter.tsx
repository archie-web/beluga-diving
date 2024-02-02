import { useEffect } from 'react';
import { PageTransition } from '../components/PageTransition';

// this is depreciated and will be removed in the future

const quotes = [
   'celebreate the small wins, small wins build momentum',
   "Sometimes, you have to give up on people not because you don't care but because they don't",
];

export const typewriterEffect = (el: any) => {
   var i = 0;
   const duration = 66; /* The duration of the effect in milliseconds */
   const typing = () => {
      /* validate before proceed */
      if (!el) {
         console.log(el + ' is not exist');
         return;
      }
      if (!el.querySelector('.cms-text')) {
         // find the CMS text, which has a cms-text class name
         console.log('CMS field is not exist');
         return;
      }

      const cmsElement = el.querySelector('.cms-text');

      /* get and set a default height for the element to prevent the CLS */

      const targetcompStyles = window.getComputedStyle(el);
      el.style.height = targetcompStyles.getPropertyValue('height');

      cmsElement.style.position = 'absolute'; // move the cmsText to behind the scene

      const cmsText = cmsElement.innerHTML;

      if (i < cmsText.length) {
         el.innerHTML += cmsText.charAt(i);
         i++;
         setTimeout(typing, duration);
      }
   };
   typing();
};

export const interactTypewriter = (ele: any) => {
   if (!ele) {
      console.log('this element dose not exsit: ' + ele);
      return;
   }

   let observer: IntersectionObserver;

   let options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.5],
   };

   const handleIntersect = (entries: { isIntersecting: boolean }[]) => {
      // const ele = entries[0].target;
      if (entries[0].isIntersecting === true) {
         // console.log('Element is visible in screen');
         typewriterEffect(ele);
         observer.unobserve(ele);
      }
   };

   observer = new IntersectionObserver(handleIntersect, options);
   observer.observe(ele);
};

export default function About() {
   // This will run one time after the component mounts
   useEffect(() => {
      // Check if the page has already loaded
      if (document.readyState === 'complete') {
         const typingTextElements = document.querySelectorAll(
            '.blinking-underline',
         );
         typingTextElements.forEach((item) => interactTypewriter(item));
      }
   }, []);

   return (
      <>
         <main>
            <PageTransition>
               {quotes.map((quote: string, index: number) => (
                  <section className="relative mb-40  max-w-2xl" key={index}>
                     <h2 className="blinking-underline text-5xl">
                        <i
                           className="cms-text invisible inset-0 z-0 opacity-0"
                           aria-hidden="true"
                        >
                           {quote}
                        </i>
                     </h2>
                  </section>
               ))}
            </PageTransition>
         </main>
      </>
   );
}
