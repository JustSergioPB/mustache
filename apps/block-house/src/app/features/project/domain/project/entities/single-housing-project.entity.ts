import { ProjectEntity } from './project.entity';
import { SingleHousingProjectProps } from './single-housing-project.props';

export class SingleHousingProjectEntity extends ProjectEntity {
  override props: SingleHousingProjectProps;
  constructor(props: SingleHousingProjectProps) {
    const { housing, ...rest } = props;
    super(rest);
    this.props = props;
  }
}
