import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const NZ_MOBILE_REG = /^02[0-2,6-9](\s|-|)\d{3,4}(\s|-|)\d{3,4}$/;

const captureSchema = yup
   .object({
      from_name: yup
         .string()
         .min(2, 'Too Short!')
         .max(20, 'Too Long!')
         .required('Your name is required'),
      from_email: yup
         .string()
         .email('Please enter a valid email')
         .required('Email address is required'),
      //   mobilenumber: yup
      //      .string()
      //      .required('Please enter a valid mobile number')
      //      .matches(NZ_MOBILE_REG, 'Please enter a valid NZ mobile number'),
      message: yup.string().required('Your message is required'),
      //   recapcha: yup.boolean().required('Please tick the box'),
   })
   .required();

export type FormData = yup.InferType<typeof captureSchema>;

export const schemaValidation =  yupResolver(captureSchema)

