import React, {Component} from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component{
  state = {
    userNames : [
      {name : 'Alice'},
      {name : 'Bob'},
      {name : 'Charlie'}
    ]
  }
  userNameHandler = (event) => {
    this.setState({
      userNames : [
        {name : event.target.value},
        {name : 'Bob'},
        {name : 'Charlie'}
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <UserInput userName = {this.state.userNames[0].name} changeUserName = {this.userNameHandler}/>
        <UserOutput userName = {this.state.userNames[0].name}/>
        <UserOutput userName = {this.state.userNames[1].name}/>
        <UserOutput userName = {this.state.userNames[2].name}/>
      </div>
    );
  }
}

export default App;
