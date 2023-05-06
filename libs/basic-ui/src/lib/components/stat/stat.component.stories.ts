import { Meta } from '@storybook/angular';
import { StatComponent } from './stat.component';

export default {
  title: 'StatComponent',
  component: StatComponent,
} as Meta<StatComponent>;

export const Primary = {
  render: (args: StatComponent) => ({
    props: args,
  }),
  args: {
    color: 'primary',
    appearance: 'empty',
    size: 'body',
  },
};
