import React, { useState } from "react";
import classNames from "classnames";
import { FaTools } from "react-icons/fa";
import "./Component.css";
import CreateForm from "./CreateForm";
import Navbar from "./Navbar";

export default function Create(props) {
  const [flip, doFlip] = useState(false);

  function renderIcon() {
    return (
      <div
        className={classNames("create", "container")}
        onClick={() => handleClick(props)}
      >
        <div className="iconContainer">
          <FaTools className={classNames("icon")} />
          <h1>Create</h1>
          <p className={classNames("subtitle")}>Create data tokens</p>
        </div>
      </div>
    );
  }

  function renderForm() {
    return (
      <>
        <Navbar />
        <CreateForm />
      </>
    );
  }

  function handleClick() {
    doFlip(!flip);
    props.flex({
      create: {
        flex: "normal",
        flip
      },
      manage: {
        flex: "disabled",
        flip: false
      },
      explore: {
        flex: "disabled",
        flip: false
      }
    });
  }

  return flip ? renderForm(props) : renderIcon(props);
}
