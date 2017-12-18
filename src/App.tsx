import * as React from 'react';
import './App.css';
import { Layout } from './components/Layout';
import { BurgerBuilder } from './containers/BurderBuilder';

interface AppState {

}

class App extends React.Component<{}, AppState> {
  render() {
    return (
      <Layout>
        <BurgerBuilder/>
      </Layout>
    );
  }
}

export default App;