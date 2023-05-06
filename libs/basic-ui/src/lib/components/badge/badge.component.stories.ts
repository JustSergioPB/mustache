import { Meta } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

export default {
  title: 'BadgeComponent',
  component: BadgeComponent,
} as Meta<BadgeComponent>;

export const Primary = {
  render: (args: BadgeComponent) => ({
    props: args,
  }),
  args: {
    color: 'primary',
    empty: false,
  },
};
