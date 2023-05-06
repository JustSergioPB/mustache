import { Meta } from '@storybook/angular';
import { CountdownComponent } from './countdown.component';

export default {
  title: 'CountdownComponent',
  component: CountdownComponent,
} as Meta<CountdownComponent>;

export const Primary = {
  render: (args: CountdownComponent) => ({
    props: args,
  }),
  args: {
    totalSeconds: 0,
  },
};
