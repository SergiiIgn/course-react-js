import React from "react";

const UserCard = ({ name, surname, age }) => {
    return (
        <div>
            <div>User information:</div>
            <div>Name: {name}</div>
            <div>Surname: {surname}</div>
            <div>Age: {age}</div>
        </div>
    )
}


const UserCardText = ( { myInfoString } ) => {
    return (
        <div>{myInfoString} </div>
        
    )
}

const isAllowed = (age) => age < 18? "'t" : "";

export default class User extends React.Component {
    state = {
        name: "John",
        surname: "Smith",
        age: 19,
    };
    
    
    render() {
        return (
            <div>
                <div>***Task 1***</div>
                <UserCard  { ...this.state } />
                {/* ***This was the first option */}
                <UserCard 
                name={this.state.name} surname={this.state.surname} age={this.state.age} 
                />
                {/* ***This was the second option */}
                <UserCardText myInfoString={"My info: " + this.state.name + " - " + this.state.surname + " - " + this.state.age}/>
                <UserCardText myInfoString={"Hi " + this.state.name +", you're " + this.state.age + ", I can" + isAllowed(this.state.age) + " get you a drink."}/>
            </div>
            
           
        )
    }
}