import { Container, TitleTask } from './styles';
import { useDispatch } from 'react-redux';
import { updateTaskStatus } from '../../store/reducers/task';
import { Draggable } from '@hello-pangea/dnd';

type Props = {
     titleTask: string;
     done: boolean | 'processing';
     id: string;
     index: number;
};

const Task = ({ titleTask, done, id, index }: Props) => {
     const dispatch = useDispatch();

     const handleUpdateTaskStatus = (id: string, done: boolean) => {
          dispatch(updateTaskStatus({ id, done }));
     };

     return (
          <Draggable draggableId={id} index={index}>
               {provided => (
                    <Container
                         ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                    >
                         {done === 'processing' ? (
                              <input type="checkbox" style={{ display: 'none' }} />
                         ) : (
                              <input
                                   type="checkbox"
                                   style={{ accentColor: '#79d2e6' }}
                                   checked={done === true}
                                   onChange={() => handleUpdateTaskStatus(id, !done)}
                              />
                         )}

                         <TitleTask>{titleTask}</TitleTask>
                    </Container>
               )}
          </Draggable>
     );
};

export default Task;
