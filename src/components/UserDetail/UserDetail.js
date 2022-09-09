import axios from 'axios';
import React, { Component } from 'react';
import withRouter from '../../routes/withRouter';
class UserDetail extends Component {
    state = {
        user: {},
    };
    async componentDidMount() {
        let id = this.props.params.id;
        let res = await axios.get(`https://reqres.in/api/users/${id}`);
        this.setState({ user: res.data && res.data.data ? res.data.data : {} });
    }
    render() {
        let { user } = this.state;
        let isEmpty = Object.keys(user).length === 0;
        return (
            <>
                {!isEmpty && (
                    <>
                        <div>
                            {user.first_name} {user.last_name}
                        </div>
                        <div>{user.email}</div>
                        <img src={user.avatar} />
                        <div>
                            <button onClick={() => this.props.navigate(-1)}>
                                Back
                            </button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

export default withRouter(UserDetail);
