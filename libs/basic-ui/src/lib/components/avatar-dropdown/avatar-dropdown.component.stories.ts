import { Meta } from '@storybook/angular';
import { AvatarDropdownComponent } from './avatar-dropdown.component';

export default {
  title: 'AvatarDropdownComponent',
  component: AvatarDropdownComponent,
} as Meta<AvatarDropdownComponent>;

export const Primary = {
  render: (args: AvatarDropdownComponent) => ({
    props: args,
  }),
  args: {
    userNickname: 'mr. mustache',
    isOpen: false,
  },
};
