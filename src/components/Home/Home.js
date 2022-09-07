import React from 'react';
import logo from '../../views/logo.svg';
import '../../views/App.scss';
import withRouter from '../../routes/withRouter';
class Home extends React.Component {
    // navigate = useNavigate();
    handleClickTodo = () => {
        this.props.navigate('/todo');
    };
    render() {
        return (
            <>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Todo List </p>
                <button onClick={() => this.handleClickTodo()}>Todo App</button>
            </>
        );
    }
}
export default withRouter(Home);
