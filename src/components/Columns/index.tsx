import { Title } from '../../styles';
import { AddTask, Content } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import Task from '../Task';
import { toggleModal } from '../../store/reducers/modal';
import { Droppable } from '@hello-pangea/dnd';

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
          dispatch(toggleModal({ isActive: true }));
     };

     return (
          <Droppable droppableId={type}>
               {provided => (
                    <Content color={color} ref={provided.innerRef} {...provided.droppableProps}>
                         <Title type="secondary">{title}</Title>

                         {filteredTasks.map((task, index) => (
                              <Task
                                   id={task.id}
                                   key={task.id}
                                   titleTask={task.titleTask}
                                   done={task.done}
                                   index={index}
                              />
                         ))}

                         {provided.placeholder}

                         {type === 'ToDO' && <AddTask onClick={handleAddTask}>+ Add Task</AddTask>}
                    </Content>
               )}
          </Droppable>
     );
};

export default Columns;
