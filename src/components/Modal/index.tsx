import { useDispatch, useSelector } from 'react-redux';
import { Title } from '../../styles';
import { Button, Close, Container, Input, Label, ModalContent, Overlay, Select } from './styles';
import { toggleModal } from '../../store/reducers/modal';
import type { RootState } from '../../store';
import { useState } from 'react';
import { addTask } from '../../store/reducers/task';
import { v4 as uuidv4 } from 'uuid';

const Modal = () => {
     const dispatch = useDispatch();
     const { isActive } = useSelector((state: RootState) => state.modal);

     const [titleTask, setTitleTask] = useState('');
     const [done, setDone] = useState(false as boolean | 'processing');

     const handleCloseModal = () => {
          dispatch(toggleModal(false));
     };

     const handleCreateTask = () => {
          const idUnico = uuidv4();
          if (!titleTask) return alert('Preencha o título da tarefa');
          dispatch(addTask({ id: idUnico, titleTask, done }));
          setTitleTask('');
          dispatch(toggleModal(false));
     };

     function parseTaskState(value: string): boolean | 'processing' {
          if (value === 'true') return true;
          if (value === 'false') return false;
          return 'processing';
     }

     return (
          <Container isActive={isActive}>
               <Overlay onClick={handleCloseModal} />

               <ModalContent>
                    <Close onClick={handleCloseModal}>X</Close>

                    <Title type="primary" style={{ color: '#1d1d1d' }}>
                         Criar tarefa
                    </Title>

                    <Label htmlFor="titulo">Tarefa:</Label>
                    <Input
                         type="text"
                         placeholder="Título da tarefa"
                         id="titulo"
                         value={titleTask}
                         onChange={e => setTitleTask(e.target.value)}
                    />
                    <br />

                    <Label htmlFor="estado">Estado da Tarefa:</Label>
                    <Select
                         name="estado"
                         id="estado"
                         onChange={e => setDone(parseTaskState(e.target.value))}
                    >
                         <option value="false">To Do</option>
                         <option value="InProgress">In Progress</option>
                         <option value="true">Done</option>
                    </Select>

                    <Button type="submit" onClick={handleCreateTask}>
                         Criar tarefa
                    </Button>
               </ModalContent>
          </Container>
     );
};

export default Modal;
