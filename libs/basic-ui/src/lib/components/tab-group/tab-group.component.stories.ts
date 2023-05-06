import { Meta } from '@storybook/angular';
import { TabGroupComponent } from './tab-group.component';

export default {
  title: 'TabGroupComponent',
  component: TabGroupComponent,
} as Meta<TabGroupComponent>;

export const Primary = {
  render: (args: TabGroupComponent) => ({
    props: args,
  }),
  args: {},
};
