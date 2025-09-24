import { Title } from '../../styles';
import Task from '../Task';
import { Content } from './styles';

type Props = {
     title: string;
     color: string;
};

const Columns = ({ title, color }: Props) => {
     return (
          <Content color={color}>
               <Title type="secondary">{title}</Title>

               <Task titleTask="Task 1" done />
               <Task titleTask="Task 2" done={false} />
               <Task titleTask="Task 3" done />
          </Content>
     );
};

export default Columns;
