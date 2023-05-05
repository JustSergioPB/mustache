import { ProjectProps } from '..';
import { Currency } from '../../currency';
import { HousingProps } from '../../housing';

export type LotHousingProjectProps = ProjectProps & {
  lots: {
    housing: Pick<HousingProps, 'address' | 'imgUrls'>;
    totalInvestment: number;
    invested: number;
    sharingPrice: number;
    currency: Currency;
  }[];
};
