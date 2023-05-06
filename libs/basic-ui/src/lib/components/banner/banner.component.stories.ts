import { Meta } from '@storybook/angular';
import { BannerComponent } from './banner.component';

export default {
  title: 'BannerComponent',
  component: BannerComponent,
} as Meta<BannerComponent>;

export const Primary = {
  render: (args: BannerComponent) => ({
    props: args,
  }),
  args: {
    color: 'primary',
    appearance: 'empty',
  },
};
