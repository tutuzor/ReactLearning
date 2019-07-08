import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Andrei', age: 25 },
      { name: 'George', age: 23 },
      { name: 'Ghita', age: 22 }
    ]
  }

  switchNameHandler = (index, newPerson) => { 
    const result = this.state.persons.map((el,i) => (i === index ? newPerson : el));
    console.log(result);
    this.setState({
      persons: result
    });
  }

  render() {
    return(
      <div className="App">
        <h1>Hey World</h1>
        {this.state.persons.map((person, i)=>{
          return (
            <Person key={i} index={i} 
                    name={person.name} 
                    age={person.age}
                    changed={this.switchNameHandler} /> 
            )})}
      </div>
    );
  }
}

export default App;
