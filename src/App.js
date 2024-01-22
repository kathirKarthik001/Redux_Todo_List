import './App.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import Author from './Components/Author';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <TodoList/>
      <Author/>
    </div>
  );
}

export default App;
