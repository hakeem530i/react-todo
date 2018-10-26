import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { throws } from "assert";
// import { join } from "upath";
import { hot } from "react-hot-loader";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      currentItem: "",
      notes: []
    };
  }
  componentDidMount() {
    axios
      .get("https://5bd22342bded6100135c303c.mockapi.io/notes")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  keyPressEvent = () => {
    //this.setState({ currentItem: event.target.value });
    console.log(this.state.currentItem);
  };

  //Add Note button
  addButton = () => {
    alert("Clicked");
  };

  //Save button click
  saveClick = () => {
    var joined = this.state.notes.concat(this.state.currentItem);
    console.log(this.state.currentItem);

    //If field isn't empty
    if (this.state.currentItem.length > 0) {
      this.setState(
        {
          notes: joined
        },
        () => this.setState({ currentItem: "" })
      );
      console.log(`Current item is: ${this.state.currentItem.length}`);
    } else {
      alert("Enter text");
    }
  };
  deleteNote = () => {
    alert("Delete");
  };
  inputOnChange = event => {
    this.setState({ currentItem: event.target.value });
  };
  render() {
    return (
      <main className="App">
        <div className="w-100">
          <div className="container center vh-100 h-auto-l w-100-ns w-50-l">
            <div className="w-70-l tl center pa3">
              <h1 className="fl">To-Do List</h1>
            </div>
            <div className="w-70-l center">
              <input
                onChange={this.inputOnChange}
                className="pa2 ba0 ba b--light-gray w-70"
                placeholder="Type and press enter to save"
                type="text"
                value={this.state.currentItem}
                required
              />
              <button className="btn pa2" onClick={this.saveClick}>
                Add Task
              </button>
            </div>

            <ul className="w-70 tl center pa3-l mt0">
              <p className="ma0 pb3">You have the following due: </p>
              {this.state.notes.map(note => (
                <div>
                  <li className="list bt b--light-gray pv3-l">
                    <div className="fl mr2 round">
                      <input
                        onClick={this.deleteNote}
                        type="checkbox"
                        id="checkbox"
                      />
                      <label for="checkbox" />
                    </div>
                    {note}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

//export default App;
export default hot(module)(App);
