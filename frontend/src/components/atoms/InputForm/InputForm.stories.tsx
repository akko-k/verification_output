import type { Meta, StoryObj } from '@storybook/react';
import { InputForm } from './index';

const meta = {
  component: InputForm,
} satisfies Meta<typeof InputForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * InputForm
 */
export const Primary: Story = {
  args: {
    type: 'text',
    value: 'Todo Title 1',
    disabled: false,
    placeholder: 'タイトル',
  },
};
