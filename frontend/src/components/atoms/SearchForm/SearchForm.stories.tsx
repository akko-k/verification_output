// frontend/src/components/atoms/SearchForm/SearchForm.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import { SearchForm } from './index';

const meta = {
  component: SearchForm,
} satisfies Meta<typeof SearchForm>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * SearchForm
 */
export const Primary: Story = {
  args: {
    value: '',
    placeholder: 'Todoを検索',
    onChange: (e) => console.log(e.target.value), //仮の関数
  },
};
