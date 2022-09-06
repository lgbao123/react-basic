import React from 'react';
class AddComponent extends React.Component {
    state = {
        name: '',
        salary: '',
    };
    handleOnChangeName = (e) => {
        this.setState({
            name: e.target.value,
        });
    };
    handleOnChangeSalary = (e) => {
        this.setState({
            salary: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.salary) {
            alert('Not null');
            return;
        }
        console.log('>>> Check state ', this.state);
        let job = {
            id: Math.random(),
            name: this.state.name,
            salary: this.state.salary,
        };
        this.props.addJob(job);
        this.setState({
            name: '',
            salary: '',
        });
    };
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job</label>
                    <br />
                    <input
                        type="text"
                        id="fname"
                        value={this.state.name}
                        onChange={(e) => this.handleOnChangeName(e)}
                    />
                    <br />
                    <label htmlFor="lname">Salary</label>
                    <br />
                    <input
                        type="text"
                        id="lname"
                        value={this.state.salary}
                        onChange={(e) => this.handleOnChangeSalary(e)}
                    />
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(e) => this.handleSubmit(e)}
                    />
                </form>
            </>
        );
    }
}

export default AddComponent;
