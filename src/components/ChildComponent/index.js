import React from 'react';
class ChildComponent extends React.Component {
    state = {
        show: false,
    };
    handleShowHide = () => {
        this.setState({ show: !this.state.show });
    };
    render() {
        let { name, age, jobList } = this.props;
        let { show } = this.state;
        return (
            <>
                <div>
                    {name}-{age}
                    <br />
                    <br />
                </div>
                {/* Cach 1 
                <div>
                    <button onClick={() => this.handleShowHide()}>Show</button>
                </div>
                {show && (
                    <div className="jobList">
                        {jobList.map((job) => {
                            return (
                                <div key={job.id}>
                                    {job.name} -{job.salary}
                                </div>
                            );
                        })}
                        <div>
                            <button onClick={() => this.handleShowHide()}>
                                hide
                            </button>
                        </div>
                    </div>
                )} */}

                {/* Cach 2 */}
                {show === true ? (
                    <div>
                        <button onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                ) : (
                    <>
                        {
                            <div className="jobList">
                                {jobList.map((job) => {
                                    return (
                                        <div key={job.id}>
                                            {job.name} -{job.salary}
                                        </div>
                                    );
                                })}
                            </div>
                        }
                        <div>
                            <button onClick={() => this.handleShowHide()}>
                                hide
                            </button>
                        </div>
                    </>
                )}
            </>
        );
    }
}
export default ChildComponent;
