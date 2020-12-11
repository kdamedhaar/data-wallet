import React, { useCallback, useState } from 'react'
import { useOcean } from '@oceanprotocol/react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'
import { useEffect } from 'react'

export default function Wallet() {
  const { ocean, connect, logout, accountId } = useOcean()

  const [popoverOpen, setPopoverOpen] = useState(false)

  const toggle = () => setPopoverOpen(!popoverOpen)

  const conn = async () => {
    await connect()
  }

  const init = useCallback(async () => {
    if (ocean === undefined || accountId === undefined) return
    await ocean.assets.ownerAssets(accountId)
  }, [accountId, ocean])

  useEffect(() => {
    init()
  }, [ocean, accountId, init])

  const disc = async () => {
    await logout()
    await conn()
  }

  return (
    <>
      {accountId ? (
        <div>
          <Button type='button'>{accountId}</Button>
        </div>
      ) : (
        <div>
          <Button onClick={conn}>Connect</Button>
        </div>
      )}
    </>
  )
}
