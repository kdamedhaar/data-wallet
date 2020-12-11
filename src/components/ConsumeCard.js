import React, { useState } from 'react'
import {
  usePublish,
  useConsume,
  useOcean,
  usePricing,
  useMetadata,
} from '@oceanprotocol/react'
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap'
import './Component.css'
import Spinner from './Spinner'

export default function ConsumeCard({ data, bgColor }) {
  const { name, author, dtName, symbol, price, ddo } = data
  const { ocean, accountId } = useOcean()
  const { consumeStepText, consume, consumeError } = useConsume()
  const { buyDT } = usePricing(ddo)
  const [isLoading, setIsLoading] = useState(false)

  async function handleDownload() {
    console.log('Going to buy DT')
    setIsLoading(true)
    await buyDT('1')
    console.log('Bought DT')
    console.log('Going to Download')
    await consume(ddo.id, ddo.dataToken, 'access', accountId)
    console.log('Download complete')
    setIsLoading(false)
  }

  return (
    <Card style={{ backgroundColor: bgColor }}>
      <CardBody>
        <CardTitle>
          <h3>{`${name}`}</h3>
        </CardTitle>
        <CardText>
          <strong>Author</strong>: {author} <br />
          <strong>DID:</strong>: {ddo.id} <br />
          <strong>Datatoken:</strong>: {dtName} <br />
          <strong>Symbol:</strong>: {symbol} <br />
          <strong>Price:</strong>: {price} OCEAN <br />
        </CardText>
        <Button onClick={handleDownload}>Download</Button>
      </CardBody>
      {isLoading ? (
        <Spinner
          loadingText={consumeStepText ? consumeStepText : 'downloading data..'}
        />
      ) : (
        ''
      )}
    </Card>
  )
}
