import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { throws } from "assert";
// import { join } from "upath";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      currentItem: "",
      notes: []
    };
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
                onChange={event => {
                  this.setState({ currentItem: event.target.value });
                }}
                className="pa3 ba0 ba b--light-gray w-70"
                placeholder="Type and press enter to save"
                type="text"
                value={this.state.currentItem}
                required
              />
              <button className="btn pa3" onClick={this.saveClick}>
                Add Task
              </button>
            </div>

            <ul className="w-70 tl center pa3-l">
              {this.state.notes.map(note => (
                <li className="list pt3-l">
                  {note}
                  <button onClick={this.deleteNote}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
