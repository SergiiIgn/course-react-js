import React from "react";

export default class Albums extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        }
    };

    componentDidMount() {
        this.getAlbums();
    }

    getAlbums = () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => this.setState({albums:data}));
    }

    componentDidUpdate() {
    }


    render() {
        return (
            this.state.albums.map(({ id, userId, title }) => 
                <div key={id}>
                    {id} {userId} {title}
                </div>
            )
        )
    }
}