import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TopBar from '../components/TopBar';


const meta = {
    title: 'Global/TobBar',
    component: TopBar,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
    },
};

