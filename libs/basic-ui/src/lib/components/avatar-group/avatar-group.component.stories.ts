import { Meta } from '@storybook/angular';
import { AvatarGroupComponent } from './avatar-group.component';

export default {
  title: 'AvatarGroupComponent',
  component: AvatarGroupComponent,
} as Meta<AvatarGroupComponent>;

export const Primary = {
  render: (args: AvatarGroupComponent) => ({
    props: args,
  }),
  args: {},
};
