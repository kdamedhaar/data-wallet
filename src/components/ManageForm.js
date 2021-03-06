import React, { useEffect, useState } from 'react'
import { useOcean } from '@oceanprotocol/react'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import TableContainer from './TableContainer'
import './Component.css'
import Spinner from './Spinner'

export default function ManageForm() {
  const { ocean, connect, logout, accountId } = useOcean()
  const [inProgress, setInProgress] = useState(true)
  const [datasets, setDatasets] = useState([])

  useEffect(() => {
    async function fetchDataAssets() {
      try {
        const url = `https://aquarius.rinkeby.oceanprotocol.com/api/v1/aquarius/assets/ddo/query?text=${accountId}&offset=500`

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
        if (response.status == 200) {
          setInProgress(false)
          let processedData = await processData(results)
          console.log('processed data -')
          console.log(processedData)
          setDatasets(processedData.slice())
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchDataAssets()
  }, [])

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
            return {
              name,
              author,
              address,
              cap,
              dtName,
              minter,
              symbol,
              price: Number(item.price.value).toFixed(2),
              ddo: item,
              did: item.id,
            }
          }
        }
      })
    )
  }

  function renderResults() {
    return accountId ? (
      inProgress ? (
        <Spinner loadingText={'Getting Your Datatokens...'} />
      ) : datasets.length ? (
        <Container>
          <h2 style={{ marginBottom: '20px' }}> My datatokens</h2>
          <TableContainer data={datasets} bgColor='#26547c' showBuy={false} />
        </Container>
      ) : (
        ''
      )
    ) : (
      <div className='loaderContainer'>
        <h1 className='manage'>Connect your wallet..</h1>
      </div>
    )
  }

  return (
    <div className='pageContainer fullPage managePage'>{renderResults()}</div>
  )
}
