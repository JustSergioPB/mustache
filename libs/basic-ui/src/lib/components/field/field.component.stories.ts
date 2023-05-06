import { Meta } from '@storybook/angular';
import { FieldComponent } from './field.component';

export default {
  title: 'FieldComponent',
  component: FieldComponent,
} as Meta<FieldComponent>;

export const Primary = {
  render: (args: FieldComponent) => ({
    props: args,
  }),
  args: {
    color: 'primary',
    size: 'body',
  },
};
