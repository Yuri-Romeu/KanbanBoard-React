import { Title } from '../../styles';
import { AddTask, Content } from './styles';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import Task from '../Task';

type Props = {
     title: string;
     color: string;
     type: 'ToDO' | 'InProgress' | 'Done';
};

const Columns = ({ title, color, type }: Props) => {
     const tasks = useSelector((state: RootState) => state.task);

     const filteredTasks = tasks.filter(task => {
          if (type === 'ToDO') return task.done === false;
          if (type === 'InProgress') return task.done === 'processing';
          if (type === 'Done') return task.done === true;
          return false;
     });

     return (
          <Content color={color}>
               <Title type="secondary">{title}</Title>

               {filteredTasks.map(task => (
                    <Task key={task.id} titleTask={task.titleTask} done={task.done} />
               ))}

               {type === 'ToDO' && (
                    <>
                         <AddTask>+ Add Task</AddTask>
                    </>
               )}
          </Content>
     );
};

export default Columns;
