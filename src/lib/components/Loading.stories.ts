import type { Meta, StoryObj } from '@storybook/svelte';
import Loading from './Loading.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'components/Loading',
	component: Loading,
	tags: ['autodocs']
} satisfies Meta<Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};
