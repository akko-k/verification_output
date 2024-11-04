// frontend/src/components/atoms/NavigationLink/NavigationLink.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { NavigationLink } from './index';

const meta = {
  component: NavigationLink,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof NavigationLink>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * NavigationLink
 */
export const Primary: Story = {
  args: {
    to: '/example',
    label: '一覧',
  },
};
