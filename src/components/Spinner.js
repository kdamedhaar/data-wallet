import React, { Fragment } from 'react'
import Loader from 'react-loader-spinner'

export default function Spinner({ loadingText }) {
  return (
    <div className='spinner'>
      <Loader color='#ffffff' type='Bars' height={60} width={200} />
      {loadingText ? <h5>{loadingText}</h5> : ''}
    </div>
  )
}
