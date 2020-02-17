import React, {Component} from 'react';
import FirstComponent from './components/learing-examples/FirstComponent';
import SecondComponent from './components/learing-examples/SecondComponent';
import ThirdComponent from './components/learing-examples/ThirdComponent';
import Counter from './components/counter/Counter';
import logo from './logo.svg';
import TodoApp from './components/todo/TodoApp'
import './App.css';
import './bootstrap.css';

class App extends Component{
  render(){
    return(
        <div className="App">
            {/*<Counter/>*/}
            <TodoApp/>
        </div>
    );
  }
}

class LearningComponents extends Component{
  render(){
    return(
      <div className="LearningComponents">
        My Hellow World
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
    </div>
    )
  }
}


export default App;