import { Title } from '../../styles';
import { Button, Container, Input, Label, ModalContent, Overlay, Select } from './styles';

type Props = {
     isActive: boolean;
};

const Modal = ({ isActive }: Props) => {
     return (
          <Container isActive={isActive}>
               <Overlay />

               <ModalContent>
                    <Title type="primary" style={{ color: '#1d1d1d' }}>
                         Criar tarefa
                    </Title>

                    <Label htmlFor="titulo">Tarefa:</Label>
                    <Input type="text" placeholder="Título da tarefa" id="titulo" />
                    <br />

                    <Label htmlFor="estado">Estado da Tarefa:</Label>
                    <Select name="estado" id="estado">
                         <option value="ToDO">To Do</option>
                         <option value="InProgress">In Progress</option>
                         <option value="Done">Done</option>
                    </Select>

                    <Button>Criar tarefa</Button>
               </ModalContent>
          </Container>
     );
};

export default Modal;
