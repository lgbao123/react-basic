import React from 'react';
import AddNewTodo from '../AddNewTodo/AddNewTodo';
import './TodoList.scss';
class TodoList extends React.Component {
    state = {
        name: 'John',
        age: '18',
        todoList: [
            { id: '001', title: 'IT', isEdit: false },
            { id: '002', title: 'Test', isEdit: false },
        ],
        editTodo: {},
    };
    // todo : Thêm todo (hàm này sẽ được truyền qua props trong AddNewTodo)
    addTodo = (todo) => {
        this.setState({
            todoList: [...this.state.todoList, todo],
        });
    };
    // todo : Xoá todo
    handleRemoveTodo = (todo) => {
        let tempTodo = this.state.todoList;
        tempTodo = tempTodo.filter((item) => item.id !== todo.id);
        this.setState({
            todoList: tempTodo,
        });
    };
    // todo : Xử lý input khi sửa todo
    handleOnChangeEditTodo = (event) => {
        this.setState({
            editTodo: { ...this.state.editTodo, title: event.target.value },
        });
    };
    // todo : Sửa todo
    handleEditTodo = (todo) => {
        let tempTodo = this.state.todoList;
        let index = tempTodo.findIndex((item) => item.id === todo.id);

        // todo : Nhấn vào nút save
        if (todo.isEdit) {
            tempTodo[index].title = this.state.editTodo.title;
            tempTodo[index].isEdit = false;
            this.setState({
                todoList: tempTodo,
                editTodo: '',
            });
            // todo : Nhấn vào nút edit
        } else {
            tempTodo = tempTodo.map((item) => {
                item.isEdit = false;
                return item;
            });
            tempTodo[index].isEdit = true;
            this.setState({
                todoList: tempTodo,
                editTodo: todo,
            });
        }
    };
    render() {
        let { todoList } = this.state;
        return (
            <>
                <AddNewTodo addTodo={this.addTodo} />

                <div className="todoList-container">
                    {todoList.map((item, index) => {
                        return (
                            <div key={item.id} className="item">
                                <span className="content">
                                    {item.isEdit === false ? (
                                        <>
                                            {index}. {item.title}
                                        </>
                                    ) : (
                                        <input
                                            type="text"
                                            value={this.state.editTodo.title}
                                            onChange={(e) =>
                                                this.handleOnChangeEditTodo(e)
                                            }
                                        />
                                    )}
                                </span>
                                <button
                                    className="btn-edit"
                                    onClick={() => this.handleEditTodo(item)}
                                >
                                    {item.isEdit === false ? (
                                        <>Edit</>
                                    ) : (
                                        <>Save</>
                                    )}
                                </button>
                                <button
                                    className="btn-remove"
                                    onClick={() => this.handleRemoveTodo(item)}
                                >
                                    Remove
                                </button>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}
export default TodoList;
