import React from 'react';
import { twMerge } from 'tailwind-merge';

type ContactProps = {
   phone?: string;
   email?: string;
   className?: string;
};

type ContactListProps = Omit<
   React.HTMLAttributes<HTMLUListElement>,
   'className'
> &
   ContactProps;

export default function ContactList({
   phone,
   email,
   className = '',
   ...rest
}: ContactListProps) {
   return (
      <ul className={twMerge('space-y-2', className)} {...rest}>
         {phone && <li>Phone: {phone}</li>}
         {email && <li>Email: {email}</li>}
      </ul>
   );
}
