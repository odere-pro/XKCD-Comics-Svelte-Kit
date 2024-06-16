import type { Meta, StoryObj } from '@storybook/svelte';
import Breadcrumbs from './Breadcrumbs.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'components/Breadcrumbs',
	component: Breadcrumbs,
	tags: ['autodocs']
} satisfies Meta<Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};

export const WithSlug: Story = {
	args: {
		id: '1'
	}
};
