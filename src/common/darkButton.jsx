import React from "react";
import { ReactComponent as Moon } from "/moon.svg";
import { ReactComponent as Sun } from "/sun.svg";

function DarkButton({ onChange, checked = false }) {
  return (
    <div className="mode" onClick={onChange}>
      <Moon></Moon>
      <Sun></Sun>
    </div>
  );
}

export default DarkButton;
