import React from 'react';
import ChildComponent from '../ChildComponent';
class MyComponent extends React.Component {
    state = {
        name: 'John',
        age: '18',
        jobList: [
            { id: '001', name: 'IT', salary: '500' },
            { id: '002', name: 'Test', salary: '400' },
        ],
    };
    render() {
        return (
            <ChildComponent
                name={this.state.name}
                age={this.state.age}
                jobList={this.state.jobList}
            />
        );
    }
}
export default MyComponent;
