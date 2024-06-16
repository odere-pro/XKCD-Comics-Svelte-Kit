import type { Meta, StoryObj } from '@storybook/svelte';
import Pagination from './Pagination.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'components/Pagination',
	component: Pagination,
	tags: ['autodocs']
} satisfies Meta<Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		currentPage: 5,
		totalPages: 10
	}
};

export const First: Story = {
	args: {
		currentPage: 1,
		totalPages: 10
	}
};

export const Last: Story = {
	args: {
		currentPage: 10,
		totalPages: 10
	}
};
