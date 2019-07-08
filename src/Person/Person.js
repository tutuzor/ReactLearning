import React from 'react';
import './Person.css';

const person = (props) => {
    const updatePersonAge = (event) => {
        const newPerson = {
            name: props.name,
            age: Number(event.target.value)
        }
        props.changed(props.index, newPerson)
    }

    const updatePersonName = (event) => {
        const newPerson = {
            name: event.target.value,
            age: props.age
        }
        props.changed(props.index, newPerson)
    }

    return(
        <div className="Person">
            <p>Person [{props.index}] with name [{props.name}] of [{props.age}] years old</p>
            <input type="text" value={props.name} onChange={updatePersonName}></input>
            <input type="number" value={props.age} onChange={updatePersonAge}></input>
            <p>{props.children}</p>
        </div>
    );
}

export default person;