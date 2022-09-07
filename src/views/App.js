import logo from './logo.svg';
import './App.scss';
import TodoList from '../components/TodoList/TodoList.js';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todo" element={<TodoList />} />
                    </Routes>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
