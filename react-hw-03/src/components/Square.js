import React from "react";

export default class Square extends React.Component {
    state = {
        width: 100 + 'px',
        height: 100 + 'px',
        background: 'blue',
        marginLeft: 20 + 'px',
        marginTop: 20 + 'px',
    };
    
    squareRef = React.createRef();

    componentDidMount() {
        setTimeout(() => {
            this.setState({marginLeft: 220 + 'px'});        
        }, 2000);
    }

    componentDidUpdate() {
    }
    
    render() {
        return <div style={this.state} ref={this.squareRef}/>             
    }
}