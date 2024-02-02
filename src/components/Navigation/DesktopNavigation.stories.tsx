
import type { Meta, StoryObj } from '@storybook/react';

import { DesktopNavigation } from './DesktopNavigation';

export default {
   title: 'Navigation/Desktop',
   component: DesktopNavigation,
   parameters: {
      layout: 'centered',
   },
   decorators: [
      (Story) => (
         <section className="bg-slate-100">
            <Story />
         </section>
      ),
   ],
} as Meta<typeof DesktopNavigation>;

type Story = StoryObj<typeof DesktopNavigation>;

export const Default: Story = {};
