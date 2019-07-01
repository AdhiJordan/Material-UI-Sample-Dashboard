import React, {Component} from 'react';
import Display from './Display';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';

class App extends  Component{
  constructor(props){
    super(props);
    this.state = {
      user: "",
      age:29
    }
  }

  componentWillReceiveProps(updatedValuefromRedux){
    console.log("updatedValuefromRedux", updatedValuefromRedux)
  }

  getUser(e){
    this.setState({
      user: e.target.value
    })
  }

  setData(e){
    e.preventDefault();
    let obj = {};
    obj.name = this.state.user;
    this.setState({
      user: ""
    })
  }

  render(){
    return(
      <div>
       <p>My age:{this.state.age}</p>
        <input type="text" value={this.state.user} onChange={this.getUser.bind(this)} />
        <button onClick={this.setData.bind(this)}>Submit</button>
      </div>
    );
  }
}




export default (App);






