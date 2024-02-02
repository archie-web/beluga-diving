import React from 'react';
import { Meta, Story } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import { ReactPlayerProps } from 'react-player';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default {
   component: Modal,
   title: 'Components/Modal',
} as Meta;

const Template: Story<ModalProps> = (args) => (
   <>
      <Modal {...args} className="max-w-[80vw] bg-white p-6 lg:p-14 ">
         <h3>HTML Modal</h3>
         <p>
            The new HTML dialog element. The actual dialog element itself is
            very easy since it is just a single element that only has one custom
            attribute that you can add to it. It also acts similarly to a fancy
            div since you can put anything you want in the dialog element and it
            is also very easy to style exactly how you want.
         </p>
         {/* accessibility feature you get by default from the dialog element. */}
         <form method="dialog">
            <div className="flex flex-col gap-4">
               <input
                  type="text input"
                  placeholder="test"
                  className="border bg-slate-50 p-3"
               />
               <div className="flex gap-3">
                  <button formMethod="submit" type="submit" className="button">
                     Submit
                  </button>
                  <button formMethod="dialog" type="submit" className="button">
                     Cancel
                  </button>
               </div>
            </div>
         </form>
      </Modal>
   </>
);

export const Default = Template.bind({});
Default.args = {};

export const VideoModal = () => (
   <Modal className="bg-transparent p-0">
      <ReactPlayer
         className={`aspect-[16/9] max-w-7xl overflow-hidden rounded-lg shadow-lg`}
         style={{ zIndex: 3000 }}
         width="500px"
         height="auto"
         url={'https://youtu.be/NJuSStkIZBg'}
         muted={false}
         controls={false}
         //  playing
      />
   </Modal>
);
