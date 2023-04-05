import React from "react";
import AlbumsContext from "./AlbumsContext";

export const DataContext = React.createContext();

export class DataProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            quantity: 100,
        };
    };
    
    componentDidMount() {
            this.getAlbums();
            console.log("jjfjfjfj", this.quantityRef.current);
    }
    
    getAlbums = () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => this.setState({albums:data}));
    }

    quantityRef = React.createRef();

    changeQuantityValue = (e) => {
        this.setState({ quantity: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
    }
    
    componentDidUpdate() {}
       
    render() {
        return (
            <DataContext.Provider value={this.state}>
                <form onSubmit={this.onSubmit}>
                <input 
                    placeholder='Number' 
                    value={this.state.quantity} 
                    onChange={this.changeQuantityValue}
                    ref={this.quantityRef}
                />
                <button type='submit'>Enter</button>
                </form>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}