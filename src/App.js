import React, { useState, useEffect, useCallback, Fragment } from 'react'
import { ConfigHelper } from '@oceanprotocol/lib'
import { OceanProvider, useOcean } from '@oceanprotocol/react'
import classNames from 'classnames'
import { FaArrowCircleLeft } from 'react-icons/fa'
import './App.css'
import Create from './components/Create'
import Manage from './components/Manage'
import Explore from './components/Explore'
import { Network } from '@oceanprotocol/lib/dist/node/datatokens/Network'
import { NetworkMonitor } from './components/NetworkMonitor'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom'
import CreateForm from './components/CreateForm'
import ManageForm from './components/ManageForm'
import ExploreForm from './components/ExploreForm'
import Navbar from './components/Navbar'

const configRinkeby = new ConfigHelper().getConfig(
  process.env.REACT_APP_NETWORK
)
const providerOptions = {}

export const web3ModalOpts = {
  cacheProvider: true,
  providerOptions,
}

export default function App() {
  const [param, setParam] = useState('')
  const [config, setConfig] = useState(configRinkeby)

  return (
    <OceanProvider initialConfig={config} web3ModalOpts={web3ModalOpts}>
      <NetworkMonitor setConfig={setConfig} />

      <Router>
        <Switch>
          <Route path='/create'>
            <div className={classNames('App', 'createPage')}>
              <Navbar page='createPage' />
              <CreateForm />
            </div>
          </Route>
          <Route path='/manage'>
            <div className={classNames('App', 'managePage')}>
              <Navbar page='managePage' />
              <ManageForm />
            </div>
          </Route>
          <Route path='/explore'>
            <div className={classNames('App', 'explorePage')}>
              <Navbar page='explorePage' />
              <ExploreForm />
            </div>
          </Route>
          <Route path='/'>
            <div className={classNames('App-row')}>
              <div className={classNames('container')}>
                <Create />
              </div>
              <div className={classNames('container')}>
                <Manage />
              </div>
              <div className={classNames('container')}>
                <Explore />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </OceanProvider>
  )
}
