import React from "react";
import { FaWallet } from "react-icons/fa";
import classNames from "classnames";
import Wallet from "./Wallet";
import "./Component.css";

export default function Navbar(props) {
  return (
    <div className="navbarContainer">
      <div className="iconContainer">
        <FaWallet className={classNames("icon-small")} />
        <p className={classNames("subtitle")}>Create data tokens</p>
      </div>
      <div className="accountContainer">
        <Wallet />
      </div>
    </div>
  );
}
