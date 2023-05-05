import { LotHousingProjectProps } from './lot-housing-project.props';
import { ProjectEntity } from './project.entity';

export class LotHousingProjectEntity extends ProjectEntity {
  override props: LotHousingProjectProps;
  constructor(props: LotHousingProjectProps) {
    const { lots, ...rest } = props;
    super(rest);
    this.props = props;
  }
}
