import { DragDropContext } from '@hello-pangea/dnd';
import Columns from './components/Columns';
import { ColumnsWrapper, Container, Title } from './styles';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import Modal from './components/Modal';
import { updateTaskStatus } from './store/reducers/task';
import type { DropResult } from '@hello-pangea/dnd';

function Board() {
     const dispatch = useDispatch();

     const handleDragEnd = (result: DropResult) => {
          const { source, destination, draggableId } = result;

          if (!destination) return;
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
