import React from "react";

export const TaskBox = props => (
  <div className="w-70-l center">
    <input
      onChange={props.onTextInput}
      className="pa2 ba0 ba b--light-gray w-70"
      placeholder="Type and press enter to save"
      type="text"
      value={props.currentItem}
      required
    />
    <button className="btn pa2" onClick={props.taskButtonClick}>
      Add Task
    </button>
  </div>
);
