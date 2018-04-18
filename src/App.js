// App.js
import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';
class App extends Component {
  constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyDi9noDnABM0z7I1pRA2yaU3F1S936WM4g",
    authDomain: "massage-select.firebaseapp.com",
    databaseURL: "https://massage-select.firebaseio.com",
    projectId: "massage-select",
    storageBucket: "",
    messagingSenderId: "276896987280"
  };
  firebase.initializeApp(config);
}
render() {
  return (
    <div className="container">
      <Header title="Message Firebase" />
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
 }
}
export default App;