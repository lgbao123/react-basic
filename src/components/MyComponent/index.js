import React from 'react';
import AddComponent from '../AddComponent';
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
    addJob = (job) => {
        this.setState({
            jobList: [...this.state.jobList, job],
        });
    };
    render() {
        return (
            <>
                <AddComponent addJob={this.addJob} />
                <ChildComponent
                    name={this.state.name}
                    age={this.state.age}
                    jobList={this.state.jobList}
                />
            </>
        );
    }
}
export default MyComponent;
