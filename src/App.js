import React, {Component} from 'react';


class App extends Component {
  render(){
    return(
    <div className="App container">
       <header className="App-header">
          {this.props.name}
      </header>
    </div>
    );
  }
}

export default App;
