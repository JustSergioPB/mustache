import { StageProps } from '..';
import { Currency } from '../../currency';
import { ProjectStatus } from '../types/project-status';
import { ProjectType } from '../types/project-type';

export type ProjectProps = {
  id: string;
  name: string;
  imgUrls: string[];
  totalInvestment: number;
  invested: number;
  sharingPrice: number;
  currency: Currency;
  status: ProjectStatus;
  description: string;
  stages: StageProps[];
  type: ProjectType;
};
