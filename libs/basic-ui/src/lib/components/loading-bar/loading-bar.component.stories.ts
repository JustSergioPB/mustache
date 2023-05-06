import { Meta } from '@storybook/angular';
import { LoadingBarComponent } from './loading-bar.component';

export default {
  title: 'LoadingBarComponent',
  component: LoadingBarComponent,
} as Meta<LoadingBarComponent>;

export const Primary = {
  render: (args: LoadingBarComponent) => ({
    props: args,
  }),
  args: {},
};
