import { Meta } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';

export default {
  title: 'DropdownComponent',
  component: DropdownComponent,
} as Meta<DropdownComponent>;

export const Primary = {
  render: (args: DropdownComponent) => ({
    props: args,
  }),
  args: {
    items: [],
    isOpen: false,
  },
};
