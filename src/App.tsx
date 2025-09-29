import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import Columns from './components/Columns';
import { ColumnsWrapper, Container, ContainerIcon, Title } from './styles';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import { removeTask } from './store/reducers/task';
import Modal from './components/Modal';
import { updateTaskStatus } from './store/reducers/task';
import type { DropResult } from '@hello-pangea/dnd';
import { FaTrash } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import { FaTrashRestore } from 'react-icons/fa';
import { toggleModal } from './store/reducers/modal';

function Board() {
     const dispatch = useDispatch();

     const handleDragEnd = (result: DropResult) => {
          const { source, destination, draggableId } = result;

          if (!destination) return;

          if (destination.droppableId === 'Trash') {
               dispatch(removeTask(draggableId));
               return;
          }

          if (destination.droppableId === 'Edit') {
               dispatch(toggleModal({ isActive: true, editingTaskId: draggableId }));
               return;
          }

          if (
               source.droppableId === destination.droppableId &&
               source.index === destination.index
          ) {
               return;
          }

          let newStatus: boolean | 'processing' = false;
          if (destination.droppableId === 'ToDO') newStatus = false;
          if (destination.droppableId === 'InProgress') newStatus = 'processing';
          if (destination.droppableId === 'Done') newStatus = true;

          dispatch(updateTaskStatus({ id: draggableId, done: newStatus }));
     };

     return (
          <DragDropContext onDragEnd={handleDragEnd}>
               <Container>
                    <Title type="primary">Kanban Board</Title>
                    <p style={{ textAlign: 'center', color: '#999' }}>
                         Drag and drop to reorder list
                    </p>

                    <ColumnsWrapper>
                         <Columns title="To Do" color="#D4E9F3" type="ToDO" />
                         <Columns title="In Progress" color="#CEF2DA" type="InProgress" />
                         <Columns title="Done" color="#E6DAF7" type="Done" />
                    </ColumnsWrapper>
               </Container>
               <Modal />

               <Droppable droppableId="Trash">
                    {(provided, snapshot) => (
                         <ContainerIcon
                              backgroundColor="#e0404e"
                              side="right"
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                              style={{
                                   width: snapshot.isDraggingOver ? 200 : 60,
                                   borderRadius: 8,
                                   transition: 'width 0.2s',
                              }}
                         >
                              <span
                                   style={{
                                        display: 'inline-block',
                                        transition: 'transform 0.2s',
                                        transform: snapshot.isDraggingOver
                                             ? 'scale(1.3)'
                                             : 'scale(1)',
                                   }}
                              >
                                   {snapshot.isDraggingOver ? <FaTrashRestore /> : <FaTrash />}
                              </span>
                         </ContainerIcon>
                    )}
               </Droppable>

               <Droppable droppableId="Edit">
                    {(provided, snapshot) => (
                         <ContainerIcon
                              backgroundColor="#4093e0"
                              side="left"
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                              style={{
                                   width: snapshot.isDraggingOver ? 200 : 60,
                                   borderRadius: 8,
                                   transition: 'width 0.2s',
                                   display: 'flex',
                                   alignItems: 'center',
                                   padding: '20px',
                                   justifyContent: snapshot.isDraggingOver ? 'flex-end' : 'center',
                              }}
                         >
                              <span
                                   style={{
                                        display: 'inline-block',
                                        transition: 'transform 0.2s',
                                        transform: snapshot.isDraggingOver
                                             ? 'scale(1.3)'
                                             : 'scale(1)',
                                   }}
                              >
                                   <FaRegEdit />
                              </span>
                         </ContainerIcon>
                    )}
               </Droppable>
          </DragDropContext>
     );
}

function App() {
     return (
          <Provider store={store}>
               <Board />
          </Provider>
     );
}

export default App;
