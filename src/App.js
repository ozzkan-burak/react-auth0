import React, {Component} from 'react';
//custom components
import Main from './components/Main';
import Private from './components/Private';
import CallBack from './components/CallBack';
import NotFound from './components/NotFound';

class App extends Component {
  render(){
  
    let mainComponent = "";

    switch(this.props.location){
      case "":
        mainComponent=<Main {...this.props}/>;
        break;
      case "private":
        mainComponent=<Private />;
        break;
        case "callback":
        mainComponent=<CallBack />;
        break;
      default:
        mainComponent=<NotFound />
    }

    return(
    <div className="App container">
       <header className="App-header">
          {mainComponent}
      </header>
    </div>
    );
  }
}

export default App;
