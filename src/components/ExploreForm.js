import React, { useEffect, useState } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Container,
  Col,
} from 'reactstrap'
import { ConfigHelper } from '@oceanprotocol/lib'
import TableContainer from './TableContainer'
import './Component.css'
import Spinner from './Spinner'
import ConsumeCard from './ConsumeCard'

const confighelper = new ConfigHelper()
let config = confighelper.getConfig(
  process.env.REACT_APP_NETWORK,
  process.env.REACT_APP_INFURA_KEY
)

export default function ExploreForm(props) {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [loadingText, setLoadingText] = useState('loading...')
  const [ddoToDownload, setDdoToDownload] = useState(null)
  useEffect(() => {})
  async function processData(datasets) {
    return await Promise.all(
      datasets.map((item) => {
        var metadata = item.service[0]
        if (metadata) {
          if (metadata.attributes) {
            var { name, author } = metadata.attributes.main
            var {
              address,
              cap,
              symbol,
              name: dtName,
              minter,
            } = item.dataTokenInfo
            var { value } = item.price
            return {
              did: item.id,
              ddo: item,
              name,
              author,
              address,
              cap,
              dtName,
              minter,
              symbol,
              price: Number(value).toFixed(2),
            }
          }
        }
      })
    )
  }

  async function handleSearch() {
    setIsLoading(true)
    try {
      let aquariusUrl = config.metadataCacheUri
      const url = `${aquariusUrl}/api/v1/aquarius/assets/ddo/query?text=${query}&offset=500`

      let encodedUrl = encodeURI(url)
      const response = await fetch(encodedUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      const { results } = await response.json()
      console.log(results)
      let processedData = await processData(results)
      setData(processedData.slice())
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  function renderForm() {
    return (
      <div>
        <h1 style={{ color: 'white' }}> Explore Datatokens</h1>
        <Form>
          <FormGroup className='exploreForm'>
            <Input
              type='text'
              id='query'
              name='query'
              placeholder='Enter Search Query '
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Button
              className='btn'
              type='submit'
              onClick={(e) => handleSearch(e)}
            >
              {' '}
              Search{' '}
            </Button>
            <Button className='btn' onClick={() => setQuery('')}>
              {' '}
              Cancel{' '}
            </Button>
          </FormGroup>
        </Form>
      </div>
    )
  }

  function renderLoading() {
    return <Spinner loadingText={loadingText} />
  }

  function handleDownload(ddo) {
    console.log('hit download for - ', ddo.dataTokenInfo.symbol)
    return <ConsumeCard />
  }

  function renderResults() {
    return (
      <Container>
        <h2 style={{ marginBottom: '20px' }}>
          Found {data.length} Datatokens for query - {query}
        </h2>
        <TableContainer
          bgColor='#b75d69'
          download={handleDownload}
          showBuy={true}
          data={data}
        />
      </Container>
    )
  }

  return (
    <div className='pageContainer fullpage explorePage'>
      {isLoading
        ? renderLoading()
        : data.length
        ? renderResults()
        : renderForm()}
    </div>
  )
}
