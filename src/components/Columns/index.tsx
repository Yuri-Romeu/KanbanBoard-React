import { Title } from '../../styles';
import Task from '../Task';
import { AddTask, Content } from './styles';

type Props = {
     title: string;
     color: string;
     main?: boolean;
};

const Columns = ({ title, color, main }: Props) => {
     return (
          <Content color={color}>
               <Title type="secondary">{title}</Title>

               <Task titleTask="Task 1" done />
               <Task titleTask="Task 2" done={false} />
               <Task titleTask="Task 3" done />

               {main && (
                    <>
                         <AddTask>+ Add Task</AddTask>
                    </>
               )}
          </Content>
     );
};

export default Columns;
