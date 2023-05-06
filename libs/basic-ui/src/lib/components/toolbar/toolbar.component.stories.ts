import { Meta } from '@storybook/angular';
import { ToolbarComponent } from './toolbar.component';

export default {
  title: 'ToolbarComponent',
  component: ToolbarComponent,
} as Meta<ToolbarComponent>;

export const Primary = {
  render: (args: ToolbarComponent) => ({
    props: args,
  }),
  args: {},
};
