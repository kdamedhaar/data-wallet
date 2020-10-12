import React, { useState } from 'react'
import classNames from 'classnames'
import { FaWallet } from 'react-icons/fa'
import './Component.css'
import ManageForm from './ManageForm'


export default function Manage(props) {

    let unflipClasses = ['manage', 'pointer', 'container']
    let flipClasses = ['container']

    function handleClick() {
        props.flex({
            create: {
                flex: 'disabled',
                flip: false
            },
            manage: {
                flex: 'normal',
                flip: true
            },
            explore: {
                flex: 'disabled',
                flip: false
            }
        })
    }

    return (
        <div className={props.theme.manage.flip ? classNames(flipClasses) : classNames(unflipClasses)} onClick={() => handleClick()}>
            <div className={props.theme.manage.flip ? 'disabled' : 'iconContainer'}>
                <FaWallet className={classNames('icon')} />
                <h1>Manage</h1>
                <p className={classNames('subtitle')}>Manage your data tokens</p>
            </div>
            <div className={props.theme.manage.flip ? 'visible formContainer' : 'disabled'}>
                <ManageForm />
            </div>
        </div>
    )
}
