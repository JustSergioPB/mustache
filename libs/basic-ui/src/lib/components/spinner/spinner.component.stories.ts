import { Meta } from '@storybook/angular';
import { SpinnerComponent } from './spinner.component';

export default {
  title: 'SpinnerComponent',
  component: SpinnerComponent,
} as Meta<SpinnerComponent>;

export const Primary = {
  render: (args: SpinnerComponent) => ({
    props: args,
  }),
  args: {
    isLoading: false,
    success: false,
  },
};
