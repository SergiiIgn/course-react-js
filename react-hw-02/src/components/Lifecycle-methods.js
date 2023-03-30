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
        document.title = this.state.title;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component is updated');
        document.title = this.state.title;
    }

    render() {
        return (
        <div>
            <div>***Task 3***</div>
            <div>
                <button onClick={() => this.setState({ title: 'Next page' })}>Change</button>
            </div>
        </div>
        );
    }
}
