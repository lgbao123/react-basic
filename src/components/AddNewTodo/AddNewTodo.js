import React from 'react';
import './AddNewTodo.scss';
class AddNewTodo extends React.Component {
    state = {
        title: '',
    };
    handleOnChangeTodo = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    handleAddTodo = () => {
        let newTodo = {
            id: Math.random(),
            title: this.state.title,
            isEdit: false,
        };
        this.props.addTodo(newTodo);
        this.setState({
            title: '',
        });
    };
    render() {
        return (
            <>
                <div className="addTodo-container">
                    <label htmlFor="todo">New Todo :</label>
                    <div className="input">
                        <input
                            type="text"
                            id="todo"
                            onChange={(e) => this.handleOnChangeTodo(e)}
                            value={this.state.title}
                        />
                        <button
                            className="btn"
                            onClick={() => this.handleAddTodo()}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default AddNewTodo;
