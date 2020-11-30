import React, { useState } from "react";
import classNames from "classnames";
import { FaWpexplorer } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Component.css";

export default function Explore(props) {
  function renderIcon() {
    return (
      <Link to="/explore">
        <div className={classNames("explore", "container")}>
          <div className="iconContainer">
            <FaWpexplorer className={classNames("icon")} />
            <h1>Explore</h1>
            <p className={classNames("subtitle")}>Explore data tokens</p>
          </div>
        </div>
      </Link>
    );
  }

  return renderIcon(props);
}
