import { ProjectProps } from '.';
import { DurationProps } from '../value-objects/duration.props';

export class ProjectEntity {
  protected props: ProjectProps;

  constructor(props: ProjectProps) {
    this.props = props;
  }

  calculateFinancingPercentaje(): number {
    return Math.round((this.props.invested * 100) / this.props.totalInvestment);
  }

  calculateRoi(): number {
    return 0;
  }

  calculateDuration(): DurationProps {
    return {
      amount: 0,
      type: 'month',
    };
  }
}
