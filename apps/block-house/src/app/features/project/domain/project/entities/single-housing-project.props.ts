import { ProjectProps } from '..';
import { HousingProps } from '../../housing';

export type SingleHousingProjectProps = ProjectProps & {
  housing: Pick<HousingProps, 'address' | 'imgUrls'>;
};
