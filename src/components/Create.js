import React, { useState } from 'react'
import classNames from 'classnames'
import { FaTools } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Component.css'

export default function Create(props) {
  function renderIcon() {
    return (
      <Link to='/create'>
        <div className={classNames('create', 'container')}>
          <div className='iconContainer'>
            <FaTools className={classNames('icon')} />
            <h1 className='title'>Create</h1>
            <p className={classNames('subtitle', 'create')}>
              Create data tokens
            </p>
          </div>
        </div>
      </Link>
    )
  }

  return renderIcon(props)
}
