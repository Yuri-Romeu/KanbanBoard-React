import { Title } from '../../styles';
import { AddTask, Content } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import Task from '../Task';
import { toggleModal } from '../../store/reducers/modal';

type Props = {
     title: string;
     color: string;
     type: 'ToDO' | 'InProgress' | 'Done';
};

const Columns = ({ title, color, type }: Props) => {
     const tasks = useSelector((state: RootState) => state.task);
     const dispatch = useDispatch();

     const filteredTasks = tasks.filter(task => {
          if (type === 'ToDO') return task.done === false;
          if (type === 'InProgress') return task.done === 'processing';
          if (type === 'Done') return task.done === true;
          return false;
     });

     const handleAddTask = () => {
          dispatch(toggleModal(true));
     };

     return (
          <Content color={color}>
               <Title type="secondary">{title}</Title>

               {filteredTasks.map(task => (
                    <Task id={task.id} key={task.id} titleTask={task.titleTask} done={task.done} />
               ))}

               {type === 'ToDO' && (
                    <>
                         <AddTask onClick={handleAddTask}>+ Add Task</AddTask>
                    </>
               )}
          </Content>
     );
};

export default Columns;
