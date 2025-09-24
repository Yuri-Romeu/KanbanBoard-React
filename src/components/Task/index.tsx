import { Container, TitleTask } from './styles';
import { useDispatch } from 'react-redux';
import { updateTaskStatus } from '../../store/reducers/task';

type Props = {
     titleTask: string;
     done: boolean | 'processing';
     id: string;
};

const Task = ({ titleTask, done, id }: Props) => {
     const dispatch = useDispatch();

     const handleUpdateTaskStatus = (id: string, done: boolean) => {
          dispatch(updateTaskStatus({ id, done }));
     };

     return (
          <Container>
               {done === 'processing' ? (
                    <input type="checkbox" style={{ display: 'none' }} />
               ) : (
                    <input
                         type="checkbox"
                         checked={done}
                         onClick={() => handleUpdateTaskStatus(id, !done)}
                    />
               )}

               <TitleTask>{titleTask}</TitleTask>
          </Container>
     );
};

export default Task;
