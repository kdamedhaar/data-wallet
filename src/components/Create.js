import React, { useState } from 'react'
import classNames from 'classnames'
import { FaTools } from 'react-icons/fa'
import './Component.css'
import CreateForm from './CreateForm'


export default function Create(props) {

    let unflipClasses = ['create', 'pointer', 'container']
    let flipClasses = ['container']

    function handleClick() {
        props.flex({
            create: {
                flex: 'normal',
                flip: true
            },
            manage: {
                flex: 'disabled',
                flip: false
            },
            explore: {
                flex: 'disabled',
                flip: false
            }
        })
    }

    return (
        <div className={props.theme.create.flip ? classNames(flipClasses) : classNames(unflipClasses)} onClick={() => handleClick()}>
            <div className={props.theme.create.flip ? 'disabled' : 'iconContainer'}>
                <FaTools className={classNames('icon')} />
                <h1>Create</h1>
                <p className={classNames('subtitle')}>Create data tokens</p>
            </div>
            <div className={props.theme.create.flip ? 'visible formContainer' : 'disabled'}>
                <CreateForm />
            </div>

        </div >
    )
}
