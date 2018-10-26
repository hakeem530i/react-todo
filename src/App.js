import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { throws } from "assert";
// import { join } from "upath";
import { hot } from "react-hot-loader";
import { NoteList } from "./components/NoteList";
import { TaskBox } from "./components/TaskBox";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      currentItem: "",
      notes: [],
      responseLength: 0
    };
  }

  fetchNotes = () => {
    axios
      .get("https://5bd22342bded6100135c303c.mockapi.io/notes")
      .then(response =>
        this.setState(
          {
            notes: response.data,
            responseLength: response.data.length
          },
          console.log(response.data)
        )
      )
      .catch(error => console.log(error));
  };
  componentDidMount() {
    this.fetchNotes();
  }

  componentDidUpdate() {
    // alert("Component updated");

    //If a new note is saved/deleted update state
    if (this.state.notes.length !== this.state.responseLength) {
      this.fetchNotes();
    } else {
      console.log("fixed");
    }
  }

  //Add Note button
  addButton = () => {
    alert("Clicked");
  };

  //Save button click
  saveClick = () => {
    var joined = this.state.notes.concat(this.state.currentItem);
    let { currentItem } = this.state;

    //If field isn't empty
    if (this.state.currentItem.length > 0) {
      this.setState({ notes: joined }, () =>
        this.setState({ currentItem: "" })
      );
      axios.post(
        "https://5bd22342bded6100135c303c.mockapi.io/notes/",
        {
          Note: `${currentItem}`
        },
        //Refresh after saved
        this.fetchNotes()
      );
    } else {
      alert("ERROR");
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
            <TaskBox
              currentItem={this.state.currentItem}
              onTextInput={this.inputOnChange}
              taskButtonClick={this.saveClick}
            />

            <ul className="overflow-hidden w-70-l tl center pa3-l pl0 mt0">
              <NoteList onClick={this.deleteNote} notes={this.state.notes} />
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

//export default App;
export default hot(module)(App);
