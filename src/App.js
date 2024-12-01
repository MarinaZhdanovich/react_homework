import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import TemperatureConverter from './lesson3/TemperatureConverter';
// import TodoList from './lesson3/TodoList';
import HomePage from './lesson4/HomePage';
import AboutPage from './lesson4/AboutPage';
import store from './lesson5/Store';
import { Provider } from 'react-redux'
import Toggle from './lesson5/Toggle';
// import CommentsList from './components/CommentsList';
// import Message from './components/Message';
// import './styles/Message.css';

function App() {
  return (
    <div>
      {/* <Message name='World' />
      <Message name='Marina' />
      <Message name='Maxim' /> */}

      {/* <CommentsList /> */}
      {/* <TemperatureConverter />
      <TodoList /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter> */}
      <Provider store={store}>
        <Toggle />
      </Provider>
    </div>
  );
}

export default App;
