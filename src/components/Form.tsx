import { useState } from 'react';
import { TickAnimate } from './TickAnimate/TickAnimate';

export const ContactForm = () => {
   const [submitted, setSubmitted] = useState(false);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Handle form submission logic here
      setSubmitted(true);
   };

   const submittedMessage =
      'Thanks for submitting the form! We appreciate your interest and will get back to you as soon as possible. If you have any questions or concerns, please let us know. looking forward to connecting with you soon!';
   return (
      <>
         {submitted ? (
            <TickAnimate
               heading={'The form has been submitted successfully!'}
               successMessage={submittedMessage}
            />
         ) : (
            <form onSubmit={handleSubmit}>
               <p>click submit to see the message</p>
               {/* Form fields go here */}
               <button type="submit" className="button">
                  Submit
               </button>
            </form>
         )}
      </>
   );
};
