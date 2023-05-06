import { Meta } from '@storybook/angular';
import { TooltipComponent } from './tooltip.component';

export default {
  title: 'TooltipComponent',
  component: TooltipComponent,
} as Meta<TooltipComponent>;

export const Primary = {
  render: (args: TooltipComponent) => ({
    props: args,
  }),
  args: {
    message: 'Tooltip',
    position: 'top',
  },
};
