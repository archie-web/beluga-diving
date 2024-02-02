import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from './Input';
import { Textarea } from './Textarea';

export default {
   title: 'Form/Form',
   component: Textarea,
} as Meta;

export const SimpleForm = () => (
   <form action="" className="space-y-4">
      <Input
         label="name"
         name="from_name"
         placeholder="your name"
         isRequired
         register={() => {}}
         errors={{}}
      />
      <Input
         label="email"
         name="from_email"
         placeholder="your email"
         isRequired
         register={() => {}}
         errors={{}}
      />
      <Input
         label="subject"
         name="subject"
         placeholder="subject"
         register={() => {}}
         errors={{}}

      />
      <Textarea
         label="message"
         name="message"
         isRequired
         register={() => {}}
         error={{ message: 'test error message' }}
      />
      <div className="pt-4">
         <button className="button" type="submit">
            Submit
         </button>
      </div>
   </form>
);
