import * as React from 'react';
import './App.css';
import { Person as PersonComponent } from './Components/Person/Person';
import { Person } from './Types/Person';

const logo = require('./logo.svg');

interface AppState {
  people: Array<Person>;
}

class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      people: [
        {name: 'Fred', age: 13},
        {name: 'Barney', age: 18},
        {name: 'Wilma', age: 22},
      ]
    };
  }

  swithcNameHandler = (newName: string) => {
    // console.log('was clicked');
    this.setState({people: [
      {name: newName, age: 13},
      {name: newName + '!', age: 18},
      {name: `${newName}!!!`, age: 66},
    ]});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={this.swithcNameHandler.bind(this, 'FromButton')}>Switch Name</button>
        <PersonComponent 
          name={this.state.people[0].name} 
          age={this.state.people[0].age} 
        />

        <PersonComponent 
          name={this.state.people[1].name} 
          age={this.state.people[1].age} 
        />

        <PersonComponent 
          name={this.state.people[2].name} 
          age={this.state.people[2].age}
          click={this.swithcNameHandler.bind(this, 'FromParagraph')}
        >
        Some inner text of the third component.
        </PersonComponent>   
      </div>
    );
  }
}

export default App;