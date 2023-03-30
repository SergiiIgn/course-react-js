import React, { Component } from "react";

export default class Form extends Component {
    state = {
        name: "",
        surname: "",
        error: ""
    };

    inputValidation = (field) => field.length >= 3

    submit = (event) => {
        event.preventDefault();

        console.log(this.state.name, this.state.surname);

        if (this.inputValidation(this.state.name) && this.inputValidation(this.state.surname)) {
            this.setState({name: "", surname: "", error: ""})
            alert(`Welcome ${this.state.name} ${this.state.surname}`);
        } else {
            this.setState({error: "There is something wrong with your data ;("});
        }
    };

    changeNameValue = (event) => {
        this.setState({ name: event.target.value });
    };

    changeSurnameValue = (event) => {
        this.setState({ surname: event.target.value });
    };

    render() {
        return (
            <div>
                <div>***Task 2***</div>
                <form onSubmit={this.submit}>
                    <div>
                        <input 
                            placeholder="name" 
                            name="name"
                            value={this.state.name}
                            onChange={this.changeNameValue} 
                        />
                    </div>
                    <div>
                        <input 
                            placeholder="surname" 
                            name="surname" 
                            value={this.state.surname}
                            onChange={this.changeSurnameValue}
                        />
                    </div>
                    <div><button type="submit">Submit</button></div>
                </form>
            </div>
        )
    }
}
