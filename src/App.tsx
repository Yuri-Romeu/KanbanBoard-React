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
                         <Columns title="To Do" color="#D4E9F3" main />
                         <Columns title="In Progress" color="#CEF2DA" />
                         <Columns title="Done" color="#E6DAF7" />
                    </ColumnsWrapper>
               </Container>
          </Provider>
     );
}

export default App;
