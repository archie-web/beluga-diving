"use client"
import SITE_CONFIG from '@constants/siteConfig';
import { send } from 'emailjs-com';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { schemaValidation, FormData } from './FormElements/schemaValidation';
import { Input } from './FormElements';
import { Textarea } from './FormElements/Textarea';
import ReCAPTCHA from 'react-google-recaptcha';
import { ErrorMessage } from './FormElements/ErrorMessage';
import { TickAnimate } from './TickAnimate/TickAnimate';
import { AnimateIn, FadeInSlideRight } from '@components/Animations';
import { motion } from 'framer-motion';
import Button from './ui/Buttons';

interface FormElementsProps {
   name: string;
   label: string;
   placeholder?: string;
   isRequired: boolean;
   type: string;
}

export const ContactForm = () => {
   const [captchaKey, setCaptchaKey] = useState<string | null>(null);
   const [successfulSubmission, setSuccessfulSubmission] = useState(false);
   const [errorSubmission, setErrorSubmission] = useState(false);
   //    const submitted = !errorSubmission && !successfulSubmission;

   // react hook form
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<FormData>({
      resolver: schemaValidation,
   });
   const onSubmit = (data: FormData) => {
      const templateParams = {
         ...data,
         to_email: SITE_CONFIG.EMAIL,
         to_name: 'Archie',
         bcc_email: 'test@archieweb.nz',
         'g-recaptcha-response': captchaKey,
      };
      //   console.log(templateParams);
      send(
         SITE_CONFIG.EMAILJS_serviceID,
         SITE_CONFIG.EMAILJS_templateID,
         templateParams,
         SITE_CONFIG.EMAILJS_userID,
      )
         .then((response) => {
            setSuccessfulSubmission(true);
            console.log('SUCCESS!', response.status, response.text);
         })
         .catch((err) => {
            setErrorSubmission(true);
            console.log('FAILED...', err);
         });
   };

   const submittedMessage =
      'Thanks for submitting the form! We really appreciate your interest and we will get back to you as soon as possible. If you have any questions or concerns, please let us know. Looking forward to connecting with you soon!';

   const formElements = [
      {
         name: 'from_name',
         label: 'Name',
         placeholder: 'your name',
         isRequired: true,
         type: 'text',
      },
      {
         name: 'from_email',
         label: 'email',
         placeholder: 'your email',
         isRequired: true,
         type: 'email',
      },
      {
         name: 'mobilenumber',
         label: 'phone',
         placeholder: 'mobile number',
         isRequired: true,
         type: 'number',
      },
      {
         name: 'Subject',
         label: 'subject',
         placeholder: 'subject',
         isRequired: false,
         type: 'text',
      },
   ];

   return !successfulSubmission ? (
      <AnimateIn stagger={true}>
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-sm">
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
            {/* register your input into the hook by invoking the "register" function */}

            {formElements.map((item: FormElementsProps) => {
               const inputProps = {
                  label: item.label,
                  name: item.name,
                  type: item.type,
                  isRequired: item.isRequired,
                  placeholder: item.placeholder ?? '',
                  register: register,
                  errors: errors,
               };
               return (
                  <motion.div variants={FadeInSlideRight} key={item.name}>
                     <Input {...inputProps} />
                  </motion.div>
               );
            })}
            <motion.div variants={FadeInSlideRight}>
               <Textarea
                  label="message"
                  name="message"
                  isRequired
                  error={errors.message}
                  register={register}
               />
            </motion.div>

            <motion.div className="space-y-2" variants={FadeInSlideRight}>
               <ReCAPTCHA
                  theme="dark"
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                  onChange={setCaptchaKey}
               />
            </motion.div>

            {captchaKey === null && (
               <p className="text-sm">
                  To submit the form, please complete the ReCAPTCHA checkbox and
                  fill out all the mandatory fields.
               </p>
            )}

            {errorSubmission && (
               <ErrorMessage className="text-red-500">
                  There was an issue with the submission, please try again or
                  give us a call
               </ErrorMessage>
            )}

            {captchaKey !== null && (
               <motion.div
                  className="pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
               >
                  <Button className="text-xl" type="submit">
                     Submit
                  </Button>
               </motion.div>
            )}
         </form>
      </AnimateIn>
   ) : (
      <TickAnimate heading={'Message Sent'} successMessage={submittedMessage} />
   );
};
