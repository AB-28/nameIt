import React from 'react'
import './App.css'
import Header from './Header.js'
import SearchBox from './SearchBox';

class App extends React.Component {
  state = {
    headerText: 'Name It'
  };

  handleInputChange = () => {
    alert('this is called');
  };

  render() {
    return (
      <div>
        <Header headerTitle={this.state.headerText} />
        <SearchBox onInputChange={this.handleInputChange} />
      </div>
    );
  }
}


export default App;