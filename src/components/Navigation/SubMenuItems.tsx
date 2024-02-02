import { useState } from 'react';
import { menuItemProps } from './MobileNav';

const SubMenuItems = ({ label, children }: menuItemProps) => {
   const [isOpen, setOpen] = useState(false);

   const displaySubmenu = (e: any) => {
      e.preventDefault();
      setOpen(!isOpen);
   };
   return (
      <div>
         <button
            className="w-full text-left"
            onClick={(e) => displaySubmenu(e)}
         >
            {label}
         </button>
         <div
            className={`absolute inset-0 h-screen space-y-4 bg-slate-600 transition-transform ${
               isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
         >
            <button onClick={() => setOpen(false)}>back to {label}</button>
            {children}
         </div>
      </div>
   );
};

export default SubMenuItems;
