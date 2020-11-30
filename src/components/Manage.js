import React, { useState } from "react";
import classNames from "classnames";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Component.css";

export default function Manage(props) {
  function renderIcon() {
    return (
      <Link to="/manage">
        <div className={classNames("manage", "container")}>
          <div className="iconContainer">
            <FaWallet className={classNames("icon")} />
            <h1>Manage</h1>
            <p className={classNames("subtitle")}>Manage data tokens</p>
          </div>
        </div>
      </Link>
    );
  }

  return renderIcon(props);
}
