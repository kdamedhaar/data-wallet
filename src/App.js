import React, { useState } from 'react'
import { ConfigHelper } from '@oceanprotocol/lib'
import { OceanProvider } from '@oceanprotocol/react'
import classNames from 'classnames'
import { FaArrowCircleLeft } from 'react-icons/fa'
import './App.css'
import Create from './components/Create'
import Manage from './components/Manage'
import Explore from './components/Explore'


const configRinkeby = new ConfigHelper().getConfig('rinkeby')

const providerOptions = {}

export const web3ModalOpts = {
  cacheProvider: true,
  providerOptions
}

export default function App() {

  let initTheme = {
    create: {
      flex: 'normal',
      flip: false
    },
    manage: {
      flex: 'normal',
      flip: false
    },
    explore: {
      flex: 'normal',
      flip: false
    }
  }


  const [theme, setTheme] = useState(initTheme)

  return (
    <OceanProvider initialConfig={configRinkeby} web3ModalOpts={web3ModalOpts}>
      <div className="App">
        <FaArrowCircleLeft className={classNames("backBtn")} />
        <div className={classNames("container", theme.create.flex)}>
          <Create flex={setTheme} theme={theme} />
        </div>
        <div className={classNames("container", theme.manage.flex)}>
          <Manage flex={setTheme} theme={theme} />
        </div>
        <div className={classNames("container", theme.explore.flex)}>
          <Explore flex={setTheme} theme={theme} />
        </div>
      </div>
    </OceanProvider>
  )
}

