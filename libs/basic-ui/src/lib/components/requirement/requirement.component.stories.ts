import { Meta } from '@storybook/angular';
import { RequirementComponent } from './requirement.component';

export default {
  title: 'RequirementComponent',
  component: RequirementComponent,
} as Meta<RequirementComponent>;

export const Primary = {
  render: (args: RequirementComponent) => ({
    props: args,
  }),
  args: {
    isFulfilled: false,
  },
};
