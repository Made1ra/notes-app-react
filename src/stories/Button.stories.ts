import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Notes App/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Edit: Story = {
  args: {
    children: 'Edit'
  },
};

export const Archive: Story = {
  args: {
    children: 'Archive'
  },
};

export const Unarchive: Story = {
  args: {
    children: 'Unarchive'
  },
};

export const Remove: Story = {
  args: {
    children: 'Remove'
  },
};

export const ArchiveAll: Story = {
  args: {
    children: 'Archive All'
  },
};

export const UnarchiveAll: Story = {
  args: {
    children: 'Unarchive All'
  },
};

export const RemoveAll: Story = {
  args: {
    children: 'Remove All'
  },
};

export const ShowArchivedNotes: Story = {
  args: {
    children: 'Show Archived Notes'
  },
};

export const HideArchivedNotes: Story = {
  args: {
    children: 'Hide Archived Notes'
  },
};
