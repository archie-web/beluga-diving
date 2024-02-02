import type { Meta, StoryObj } from '@storybook/react';
import { VideoPlayer } from './VideoPlayer';

export default {
   title: 'Components/VideoPlayer',
   tags: ['autodocs'],
   component: VideoPlayer,
} as Meta<typeof VideoPlayer>;

type Story = StoryObj<typeof VideoPlayer>;

export const Default: Story = {
   args: {
      url: 'https://vimeo.com/staff/player',
      controls: false,
   },
};

export const ShowControl: Story = {
   args: {
      ...Default.args,
      controls: true,
   },
};

export const YoutubePlayer: Story = {
   args: {
      url: 'https://youtu.be/NJuSStkIZBg',
   },
};
export const TrimYoutubeLogo: Story = {
   args: {
      ...YoutubePlayer.args,
      className: 'scale-150',
   },
};

export const PlaceholderImage: Story = {
   args: {
      ...Default.args,
      placerholderImage: 'https://via.placeholder.com/1600x900',
   },
};
