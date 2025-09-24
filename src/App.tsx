import Columns from './components/Columns';
import { ColumnsWrapper, Container, Title } from './styles';

function App() {
     return (
          <Container>
               <Title type="primary">Kanban Board</Title>

               <ColumnsWrapper>
                    <Columns title="To Do" color="#D4E9F3" />
                    <Columns title="In Progress" color="#CEF2DA" />
                    <Columns title="Done" color="#E6DAF7" />
               </ColumnsWrapper>
          </Container>
     );
}

export default App;
