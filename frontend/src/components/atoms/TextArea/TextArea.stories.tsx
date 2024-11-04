import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './index';

const meta = {
  component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * InputForm
 */
export const Primary: Story = {
  args: {
    value: 'Todo Content 1',
    disabled: false,
    placeholder: '内容',
  },
};
