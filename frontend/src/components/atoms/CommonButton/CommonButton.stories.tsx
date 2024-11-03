import type { Meta, StoryObj } from '@storybook/react';
import { CommonButton } from './index';

const meta = {
  component: CommonButton,
} satisfies Meta<typeof CommonButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * CommonButton
 */
export const Primary: Story = {
  args: {
    label: '追加',
    type: 'button',
    onClick: () => alert('クリックされました！'),
  },
};
