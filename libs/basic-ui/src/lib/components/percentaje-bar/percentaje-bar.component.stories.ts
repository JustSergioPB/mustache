import { Meta } from '@storybook/angular';
import { PercentajeBarComponent } from './percentaje-bar.component';

export default {
  title: 'PercentajeBarComponent',
  component: PercentajeBarComponent,
} as Meta<PercentajeBarComponent>;

export const Primary = {
  render: (args: PercentajeBarComponent) => ({
    props: args,
  }),
  args: {
    percentaje: 0,
    color: 'primary',
    appearance: 'empty',
    size: 'body',
  },
};
