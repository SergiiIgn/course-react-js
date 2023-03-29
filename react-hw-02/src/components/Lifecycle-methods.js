import React from "react";

export default class LifeCycleTest extends React.Component {
    constructor(props) 
    {
        super(props);
        this.state = 
        { title: "Initial page", };
    }

    componentDidMount() {
        console.log('Component is mounted');
        this.setState({ title: document.title });
        document.title = this.state.title;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component is updated');
        document.title = this.state.title;
    }

    render() {
        return (
        <>
            ***Task 3***
            <div>
                <button onClick={() => this.setState({ title: 'Next page' })}>Change</button>
            </div>
        </>
        );
    }
}
