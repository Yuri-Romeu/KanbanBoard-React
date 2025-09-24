import { Container, TitleTask } from './styles';

type Props = {
     titleTask: string;
     done: boolean | 'processing';
};

const Task = ({ titleTask, done }: Props) => {
     return (
          <Container>
               {done === 'processing' ? (
                    <input type="checkbox" style={{ display: 'none' }} />
               ) : (
                    <input type="checkbox" checked={done} />
               )}

               <TitleTask>{titleTask}</TitleTask>
          </Container>
     );
};

export default Task;
