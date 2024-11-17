import './App.css';
import TemperatureConverter from './lesson3/TemperatureConverter';
import TodoList from './lesson3/TodoList';
// import CommentsList from './components/CommentsList';
// import Message from './components/Message';
import './styles/Message.css';

function App() {
  return (
    <div>
      {/* <Message name='World' />
      <Message name='Marina' />
      <Message name='Maxim' /> */}
      {/* <CommentsList /> */}
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}

export default App;
