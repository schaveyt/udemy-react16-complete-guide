import * as React from 'react';
import './App.css';
import { Person as PersonComponent } from './Components/Person/Person';
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

  // namedChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // console.log('was clicked');
  //   this.setState({people: [
  //     {name: e.currentTarget.value, age: 13},
  //     {name: `${e.currentTarget.value}!`, age: 18},
  //     {name: `${e.currentTarget.value}!!!`, age: 66},
  //   ]});
  // }

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
              return <PersonComponent name={p.name} age={p.age} key={p.id} />;
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