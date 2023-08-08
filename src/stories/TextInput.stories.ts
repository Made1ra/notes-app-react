import type { Meta, StoryObj } from '@storybook/react';

import TextInput from './TextInput';

const meta = {
    title: 'Notes App/TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 'Name',
        required: true
    },
};
