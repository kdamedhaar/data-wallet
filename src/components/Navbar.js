import React from 'react'
import { FaWallet } from 'react-icons/fa'
import classNames from 'classnames'
import Wallet from './Wallet'
import { Link } from 'react-router-dom'
import './Component.css'

export default function Navbar(props) {
  return (
    <div className={classNames('navbarContainer', props.page)}>
      <Link className='brand' to='/'>
        <ion-icon
          style={{ color: 'white', fontSize: '45px' }}
          name='apps'
        ></ion-icon>{' '}
        <h3>Data Wallet</h3>
      </Link>
      <Wallet />
    </div>
  )
}
