import React, { useState } from "react";
import classNames from "classnames";
import { FaWpexplorer } from "react-icons/fa";
import { ConfigHelper } from "@oceanprotocol/lib";
import ExploreForm from "./ExploreForm";
import "./Component.css";

const confighelper = new ConfigHelper();
let config = confighelper.getConfig(
  process.env.NETWORK,
  process.env.INFURA_KEY
);

export default function Explore(props) {
  const [flip, doFlip] = useState(false);

  function renderIcon() {
    return (
      <div
        className={classNames("explore", "container")}
        onClick={() => handleClick(props)}
      >
        <div className="iconContainer">
          <FaWpexplorer className={classNames("icon")} />
          <h1>Explore</h1>
          <p className={classNames("subtitle")}>Explore data tokens</p>
        </div>
      </div>
    );
  }

  function renderForm() {
    return <ExploreForm />;
  }

  function handleClick() {
    doFlip(!flip);
    props.flex({
      create: {
        flex: "disabled",
        flip: false
      },
      manage: {
        flex: "disabled",
        flip: false
      },
      explore: {
        flex: "normal",
        flip
      }
    });
  }

  return flip ? renderForm(props) : renderIcon(props);
}
