import { useDispatch, useSelector } from 'react-redux';
import { Title } from '../../styles';
import { Button, Close, Container, Input, Label, ModalContent, Overlay, Select } from './styles';
import { toggleModal } from '../../store/reducers/modal';
import type { RootState } from '../../store';
import { useState, useEffect } from 'react';
import { addTask, updateTask } from '../../store/reducers/task';
import { v4 as uuidv4 } from 'uuid';

const Modal = () => {
     const dispatch = useDispatch();
     const { isActive, editingTaskId } = useSelector((state: RootState) => state.modal);
     const tasks = useSelector((state: RootState) => state.task);

     const [titleTask, setTitleTask] = useState('');
     const [done, setDone] = useState(false as boolean | 'processing');

     // Se houver uma task em edição, preencher os campos
     useEffect(() => {
          if (editingTaskId) {
               const task = tasks.find(t => t.id === editingTaskId);
               if (task) {
                    setTitleTask(task.titleTask);
                    setDone(task.done);
               }
          } else {
               setTitleTask('');
               setDone(false);
          }
     }, [editingTaskId, tasks]);

     const handleCloseModal = () => {
          dispatch(toggleModal({ isActive: false }));
     };

     const handleSaveTask = () => {
          if (!titleTask) return alert('Preencha o título da tarefa');

          if (editingTaskId) {
               // Atualiza a task existente
               dispatch(updateTask({ id: editingTaskId, titleTask, done }));
          } else {
               // Cria nova task
               const idUnico = uuidv4();
               dispatch(addTask({ id: idUnico, titleTask, done }));
          }

          dispatch(toggleModal({ isActive: false }));
     };

     const parseTaskState = (value: string): boolean | 'processing' => {
          if (value === 'true') return true;
          if (value === 'false') return false;
          return 'processing';
     };

     return (
          <Container isActive={isActive}>
               <Overlay onClick={handleCloseModal} />

               <ModalContent>
                    <Close onClick={handleCloseModal}>X</Close>

                    <Title type="primary" style={{ color: '#1d1d1d' }}>
                         {editingTaskId ? 'Edit task' : 'Create task'}
                    </Title>

                    <Label htmlFor="titulo">Task:</Label>
                    <Input
                         type="text"
                         placeholder="Task title"
                         id="titulo"
                         value={titleTask}
                         onChange={e => setTitleTask(e.target.value)}
                    />
                    <br />

                    <Label htmlFor="estado">Task status:</Label>
                    <Select
                         name="estado"
                         id="estado"
                         value={done === true ? 'true' : done === false ? 'false' : 'InProgress'}
                         onChange={e => setDone(parseTaskState(e.target.value))}
                    >
                         <option value="false">To Do</option>
                         <option value="InProgress">In Progress</option>
                         <option value="true">Done</option>
                    </Select>

                    <Button type="submit" onClick={handleSaveTask}>
                         {editingTaskId ? 'Save' : 'Create task'}
                    </Button>
               </ModalContent>
          </Container>
     );
};

export default Modal;
