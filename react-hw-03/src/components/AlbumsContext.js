import React from "react";
import { DataContext } from "./context";

export default class AlbumsContext extends React.Component {

    render() {
        return (
            <DataContext.Consumer>
            {
                context => {
                    console.log(context);
                    console.log(context.quantity)
                    context.albums.map(({ id, userId, title }) => 
                        <div key={id}>
                            {id} {userId} {title}
                        </div>
                    );
                    console.log(context.albums);
                }
            }
            </DataContext.Consumer>
        )
    }
}
