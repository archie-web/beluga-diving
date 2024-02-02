import { ComponentMeta } from '@storybook/react';
import { NewsBlock } from './NewsBlock';

const data = {
   heading: 'Latest News',
   articles: [
    {
       bodyAdvanced:
          "World's first Orange Bond successfully issued with US$50 million",
       cta: {
          label: 'Learn more',
          url: '/',
       },
    },
    {
       bodyAdvanced: 'Orange Bond Steering Committee holds inaugural meeting',
       cta: {
          label: 'Learn more',
          url: '/',
       },
    },
    {
       bodyAdvanced: 'How Orange Bonds plan to peel back the gender divide',
       cta: {
          label: 'Learn more',
          url: '/',
       },
    },
 ],
};

export default {
   title: 'Blocks/NewsBlock',
   component: NewsBlock,
   parameters: {
      layout: 'centered',
   },
} as ComponentMeta<typeof NewsBlock>;

export const Default = () => <NewsBlock data={data} />;

