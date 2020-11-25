import React, { useState } from "react";
import classNames from "classnames";
import { FaWallet } from "react-icons/fa";
import "./Component.css";
import ManageForm from "./ManageForm";

export default function Manage(props) {
  const [flip, doFlip] = useState(false);

  function renderIcon() {
    return (
      <div
        className={classNames("manage", "container")}
        onClick={() => handleClick(props)}
      >
        <div className="iconContainer">
          <FaWallet className={classNames("icon")} />
          <h1>Manage</h1>
          <p className={classNames("subtitle")}>Manage data tokens</p>
        </div>
      </div>
    );
  }

  function renderForm() {
    return <ManageForm />;
  }

  function handleClick() {
    doFlip(!flip);
    props.flex({
      create: {
        flex: "disabled",
        flip: false
      },
      manage: {
        flex: "normal",
        flip
      },
      explore: {
        flex: "disabled",
        flip: false
      }
    });
  }

  return flip ? renderForm(props) : renderIcon(props);
}
