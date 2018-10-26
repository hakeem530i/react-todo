import React from "react";

export const NoteList = props => (
  <div>
    <p className="ma0 pb3">You have the following due: </p>
    {props.notes.map(note => (
      <div className="fl w-100" key={note["id"]}>
        <li className="list w-100 bt b--light-gray pv3-l">
          <div className="fl mr2 round">
            <input
              onClick={props.onClick}
              type="checkbox"
              // id={"checkbox-" + note["id"]}
              id="checkbox"
            />
            <label htmlFor="checkbox" />
          </div>
          {note["Note"]}
        </li>
      </div>
    ))}
  </div>
);
