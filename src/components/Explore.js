import React, { useState } from 'react'
import classNames from 'classnames'
import { FaWpexplorer } from 'react-icons/fa'
import ExploreForm from './ExploreForm'
import './Component.css'

export default function Explore(props) {

    function handleClick() {
        props.flex({
            create: {
                flex: 'disabled',
                flip: false
            },
            manage: {
                flex: 'disabled',
                flip: false
            },
            explore: {
                flex: 'normal',
                flip: true
            }
        })
    }


    return (
        <div className={classNames('explore', 'container')} onClick={() => handleClick()}>
            <div className={props.theme.explore.flip ? 'disabled' : 'iconContainer'}>
                <FaWpexplorer className={classNames('icon')} />
                <h1>Explore</h1>
                <p className={classNames('subtitle')}>Explore other datatokens</p>
            </div>
            <div className={props.theme.explore.flip ? 'visible formContainer' : 'disabled'}>
                <ExploreForm />
            </div>
        </div>
    )
}

