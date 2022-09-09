import axios from 'axios';
import React, { Component } from 'react';
import './UserList.scss';
import withRouter from '../../routes/withRouter';
class UserList extends Component {
    state = {
        userList: [],
    };
    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2').then((res) => {
            this.setState({
                userList: res.data && res.data.data ? res.data.data : [],
            });
        });
    }
    handleClickShowUser(userId) {
        // console.log(123);
        this.props.navigate(`/user/${userId}`);
        // this.props.navigate('/user/', { state: { userId } });
    }
    render() {
        let { userList } = this.state;
        return (
            <div className="UserList-container">
                {userList.map((item, index) => {
                    return (
                        <div
                            key={item.id}
                            className="content"
                            onClick={() => this.handleClickShowUser(item.id)}
                        >
                            {index} . {item.first_name} {item.last_name}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default withRouter(UserList);
