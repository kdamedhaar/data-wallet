import React from "react";
import { FaWallet } from "react-icons/fa";
import classNames from "classnames";
import Wallet from "./Wallet";
import { Link } from "react-router-dom";
import "./Component.css";

export default function Navbar(props) {
  return (
    <div className={classNames("navbarContainer", props.page)}>
      <Link to="/">
        <h4>Data Wallet</h4>
      </Link>
      <Wallet />
    </div>
  );
}
