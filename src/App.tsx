import Columns from './components/Columns';
import { ColumnsWrapper, Container, Title } from './styles';
import { Provider } from 'react-redux';
import store from './store';

function App() {
     return (
          <Provider store={store}>
               <Container>
                    <Title type="primary">Kanban Board</Title>

                    <ColumnsWrapper>
                         <Columns title="To Do" color="#D4E9F3" type="ToDO" />
                         <Columns title="In Progress" color="#CEF2DA" type="InProgress" />
                         <Columns title="Done" color="#E6DAF7" type="Done" />
                    </ColumnsWrapper>
               </Container>
          </Provider>
     );
}

export default App;
