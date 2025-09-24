import { Container, TitleTask } from './styles';

type Props = {
     titleTask: string;
     done: boolean;
};

const Task = ({ titleTask, done }: Props) => {
     return (
          <Container>
               <input type="checkbox" checked={done} />
               <TitleTask>{titleTask}</TitleTask>
          </Container>
     );
};

export default Task;
