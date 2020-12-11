import React, { useState, useEffect, useCallback, Fragment } from "react";
import { ConfigHelper } from "@oceanprotocol/lib";
import { OceanProvider, useOcean } from "@oceanprotocol/react";
import classNames from "classnames";
import { FaArrowCircleLeft } from "react-icons/fa";
import "./App.css";
import Create from "./components/Create";
import Manage from "./components/Manage";
import Explore from "./components/Explore";
import { Network } from "@oceanprotocol/lib/dist/node/datatokens/Network";
import { NetworkMonitor } from "./components/NetworkMonitor";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import CreateForm from "./components/CreateForm";
import ManageForm from "./components/ManageForm";
import ExploreForm from "./components/ExploreForm";
import Navbar from "./components/Navbar";

const configRinkeby = new ConfigHelper().getConfig(process.env.REACT_APP_NETWORK);
const providerOptions = {};

export const web3ModalOpts = {
  cacheProvider: true,
  providerOptions
};

export default function App() {

  const [param, setParam] = useState("")
  const [config, setConfig] = useState(configRinkeby)

  return (
    <OceanProvider initialConfig={config} web3ModalOpts={web3ModalOpts}>
      <NetworkMonitor setConfig={setConfig}/>
      <div className={classNames("App")}>
        <Router>
          <Switch>
            <Route path="/create">
              <Fragment>
                <Navbar page="createPage" />
                <CreateForm />
              </Fragment>
            </Route>
            <Route path="/manage">
              <Fragment>
                <Navbar page="managePage" />
                <ManageForm />
              </Fragment>
            </Route>
            <Route path="/explore">
              <Fragment>
                <Navbar page="explorePage" />
                <ExploreForm />
              </Fragment>
            </Route>
            <Route path="/">
              <div className={classNames("container")}>
                <Create />
              </div>
              <div className={classNames("container")}>
                <Manage />
              </div>
              <div className={classNames("container")}>
                <Explore />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </OceanProvider>
  );
}
