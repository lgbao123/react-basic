import logo from './logo.svg';
import './App.scss';
import TodoList from '../components/TodoList/TodoList.js';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from '../components/UserList/UserList';
import UserDetail from '../components/UserDetail/UserDetail';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todo" element={<TodoList />} />
                        <Route path="/user" element={<UserList />} />
                        <Route path="/user/:id" element={<UserDetail />} />
                    </Routes>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
