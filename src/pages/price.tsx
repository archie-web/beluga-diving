import Layout from '@components/Layout';
import Head from 'next/head';
import { useEffect, useRef } from 'react';

export default function Price() {
   const priceSectionRef = useRef<HTMLDivElement[]>([]);
   const selectElementRef = useRef<HTMLSelectElement>(null);
   useEffect(() => {
      // Check if the page has already loaded
      if (document.readyState === 'complete') {
         /* currency switch */

         const defaultCurrency = 'twd';

         const priceSections = priceSectionRef.current;

         if (!priceSections.length) {
            console.log('priceSection is not exist');
            return;
         }

         priceSections.forEach((item) => {
            const selectElement = selectElementRef.current;

            const displayCurrencies =
               item.querySelectorAll('.price-card__price');

            function displayCurrencyPrice(value: string) {
               displayCurrencies.forEach((item) => {
                  if (item.classList.contains(value)) {
                     item.classList.remove('hidden');
                     item.setAttribute('aria-hidden', 'true');
                  } else {
                     item.classList.add('hidden');
                     item.setAttribute('aria-hidden', 'false');
                  }
               });
            }

            const selectedValue =
               selectElement?.options[selectElement.selectedIndex].value; // get current select value

            /* set default currency display */
            if (selectedValue !== defaultCurrency) {
               console.log('not the default currency');
               const optionElement = selectElement?.querySelector(
                  `option[value=${defaultCurrency}]`,
               );
               optionElement &&
                  optionElement.setAttribute('selected', 'selected');
               displayCurrencyPrice(defaultCurrency);
            }

            selectElement &&
               selectElement.addEventListener('change', (ele: any) => {
                  displayCurrencyPrice(ele.target.value);
               });
         });
      }
   }, []);

   const array = [1, 2];

   return (
      <Layout>
         <main>
            {array.map((item) => (
               <div
                  className="price-card"
                  key={item}
                  ref={(el) => {
                     if (el) {
                        priceSectionRef.current.push(el);
                     }
                  }}
               >
                  <select
                     name="currency"
                     className="price-card__currency-selector rounded-lg border-2 p-3"
                     ref={selectElementRef}
                  >
                     <option value="nzd">NZD</option>
                     <option value="aud">AUD</option>
                     <option value="twd">TWD</option>
                  </select>

                  <h3>
                     price: $
                     <i className="price-card__price nzd text-red-500">
                        $59 NZD
                     </i>
                     <i
                        className="price-card__price aud hidden text-blue-500"
                        aria-hidden="true"
                     >
                        $69 AUD
                     </i>
                     <i
                        className="price-card__price twd hidden text-green-500"
                        aria-hidden="true"
                     >
                        $1999 TWD
                     </i>
                  </h3>
               </div>
            ))}
         </main>
      </Layout>
   );
}
