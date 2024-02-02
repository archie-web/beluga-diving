import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VStack } from '.';

export default {
    title: 'Components/VStack',
    component: VStack,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof VStack>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof VStack> = (args) => (
    <VStack {...args}>
        <div className="child">Lorem, ipsum dolor.</div>
        <div className="child">Lorem ipsum dolor sit Lorem ipsum dolor</div>
        <div className="child">Lorem, ipsum</div>
    </VStack>
);

// 👇 Each story then reuses that template
export const Default = Template.bind({});
