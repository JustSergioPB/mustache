import { Meta } from '@storybook/angular';
import { TabComponent } from './tab.component';

export default {
  title: 'TabComponent',
  component: TabComponent,
} as Meta<TabComponent>;

export const Primary = {
  render: (args: TabComponent) => ({
    props: args,
  }),
  args: {},
};
