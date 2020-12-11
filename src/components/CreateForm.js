import React, { useState } from 'react'
import classNames from 'classnames'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'
import { usePublish } from '@oceanprotocol/react'
import './Component.css'
import Spinner from './Spinner'

export default function CreateForm(props) {
  const { publish, publishStepText, isLoading } = usePublish()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [price, setPrice] = useState(0)

  const [ddo, setDdo] = useState(undefined)

  function resetForm() {
    //reset form changes
    setDescription('')
    setPrice('')
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  const publishAsset = async (e) => {
    e.preventDefault()

    const asset = {
      main: {
        type: 'dataset',
        name: title,
        dateCreated: new Date(Date.now()).toISOString().split('.')[0] + 'Z', // remove milliseconds
        author,
        files: [
          {
            url: url,
            checksum: 'efb2c764274b745f5fc37f97c6b0e761',
            contentLength: '4535431',
            contentType: 'text/csv',
            encoding: 'UTF-8',
            compression: 'zip',
          },
        ],
      },
      additionalInformation: {
        dapp: 'dataWallet12345679',
        description,
      },
    }

    let num = Math.floor(Math.random() * Math.floor(1000))
    const priceOptions = {
      price,
      name: 'DataWallet Token ' + num,
      symbol: 'DW' + num,
      tokensToMint: '100',
      cap: '1000000',
      type: 'fixed',
    }

    const ddo = await publish(asset, 'access', priceOptions)
    console.log(ddo)
    setDdo(ddo)
    if (ddo) {
      alert(`Datatoken ${ddo.dataTokenInfo.symbol} published successfully..`)
      resetForm()
    }
  }

  return (
    <div className='pageContainer fullPage createPage form'>
      <h1 style={{ color: 'white' }}>Create Datatokens</h1>
      <Form className='formContainer'>
        <FormGroup row>
          <Label sm={4} for='title'>
            {' '}
            Name :{' '}
          </Label>
          <Col sm={6}>
            <Input
              type='text'
              id='title'
              name='title'
              placeholder=''
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={4} for='description'>
            {' '}
            Description :
          </Label>
          <Col sm={6}>
            <Input
              rows='8'
              columns='50'
              type='textarea'
              id='description'
              name='description'
              placeholder=''
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={4} for='url'>
            Data URL :
          </Label>
          <Col sm={6}>
            <Input
              type='text'
              id='url'
              name='url'
              placeholder=''
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={4} for='author'>
            Owner :
          </Label>
          <Col sm={6}>
            <Input
              type='text'
              id='author'
              name='author'
              placeholder=''
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={4} for='price'>
            Price :
          </Label>
          <Col sm={6}>
            <Input
              type='text'
              id='price'
              name='price'
              placeholder=''
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Button
            className='btn'
            type='submit'
            onClick={(e) => publishAsset(e)}
          >
            {' '}
            Create{' '}
          </Button>
          <Button className='btn' onClick={() => resetForm()}>
            {' '}
            Cancel{' '}
          </Button>
        </FormGroup>
        {isLoading ? (
          <Spinner
            loadingText={
              publishStepText ? publishStepText : 'Creating datatokens'
            }
          />
        ) : (
          ''
        )}
      </Form>
    </div>
  )
}
