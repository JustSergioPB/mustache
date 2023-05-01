import { Housing } from '.';
import { Currecy } from './currency';
import { Duration } from './duration';
import { ProjectStatus } from './project-status';

export type Project = {
  name: string;
  imgUrls: string[];
  housing: Pick<Housing, 'address'>;
  totalInvestment: number;
  invested: number;
  sharingPrice: number;
  currency: Currecy;
  status: ProjectStatus;
  duration: Duration;
  roi: number;
};
