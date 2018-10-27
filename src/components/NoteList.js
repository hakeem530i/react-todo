import React, { Component } from "react";

export default class NoteList extends Component {
  constructor(props) {
    super();
  }
  onClick = key => {
    //console.log(this.props);
    this.props.onClick(key);
  };
  render() {
    return (
      <div>
        <p className="ma0 pb3">You have the following due: </p>
        {this.props.notes.map(note => (
          <div className="fl w-100" key={note["id"]}>
            <li className="list w-100 bt b--light-gray pv3-l">
              <div className="fl mr2 round">
                <input
                  onClick={() => this.onClick(note["id"])}
                  type="checkbox"
                  id={"checkbox-" + note["id"]}
                  //   id="checkbox"
                />
                <label htmlFor="checkbox" />
              </div>
              {note["Note"]}
            </li>
          </div>
        ))}
      </div>
    );
  }
}
