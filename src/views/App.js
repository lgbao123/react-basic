import logo from './logo.svg';
import './App.scss';
import TodoList from '../components/TodoList/TodoList.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Todo List </p>
                <TodoList />
            </header>
        </div>
    );
}

export default App;
