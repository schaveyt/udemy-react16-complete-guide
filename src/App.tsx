import * as React from 'react';
import './App.css';
import { PersonCard } from './Components/Presentation/PersonCard';
import { Person } from './Types/Person';

const logo = require('./logo.svg');

interface AppState {
  people: Array<Person>;
  showPeople: boolean;
}

class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      people: [
        {id: 0, name: 'Fred', age: 13},
        {id: 1, name: 'Barney', age: 18},
        {id: 2, name: 'Wilma', age: 22},
      ],
      showPeople: false
    };
  }

  toggleShowPersonHandler = () => {
    let copyOfState = this.state.showPeople;
    this.setState({showPeople: !copyOfState});
  }

  onDeletePersonHandler = (personId: number) => {
    const modifiedState = this.state.people.filter((person) => {
      return person.id !== personId;
    });
    this.setState({people: modifiedState});
  }

  namedChangedHandler = (newName: string, personId: number) => {
    const copyOfState = this.state.people.splice(0);
    copyOfState.map((person) => {
      if (person.id === personId) {
        person.name = newName;
      }
    });
    this.setState({people: copyOfState});
    
  }

  render() {
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let peopleElements: JSX.Element | undefined = undefined;

    if (this.state.showPeople) {
      peopleElements = (
        <div>
          {
            this.state.people.map((p) => {
              return (
                <PersonCard 
                  person={p} 
                  key={p.id} 
                  deleteClicked={this.onDeletePersonHandler} 
                  namedChanged={this.namedChangedHandler} 
                />);
            })
          }
        </div> 
      );
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button style={btnStyle} onClick={this.toggleShowPersonHandler}>Toggle People</button>
        {peopleElements}
      </div>
    );
  }
}

export default App;