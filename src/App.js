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
  render() {
    return (
      <main className="App">
        <div className="w-100">
          <div className="container center w-50">
            <div className="w-100 flex">
              <h1 className="fl">To-Do List</h1>
              <button
                onClick={() => {
                  alert("Clicked");
                }}
              >
                <span className="oi oi-plus fr" />
              </button>
            </div>

            <input
              onChange={event => {
                this.setState({ currentItem: event.target.value });
              }}
              className="w-70"
              placeholder="Type and press enter to save"
              type="text"
              value={this.state.currentItem}
            />
          </div>
          <ul className="w-50 center">
            {!this.state.currentItem ? (
              <li className="list">Please type to save note</li>
            ) : (
              <li className="list">
                {this.state.currentItem}
                <button
                  onClick={() => {
                    var joined = this.state.notes.concat(
                      this.state.currentItem
                    );
                    this.setState(
                      {
                        notes: joined
                      },
                      () => this.setState({ currentItem: "" })
                    );
                    console.log(`Current item is: ${this.state.currentItem}`);
                  }}
                >
                  Save
                </button>
              </li>
            )}

            {this.state.notes.map(note => (
              <li className="list">
                {note}
                <button onClick={() => alert("Delete")}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  }
}

export default App;
