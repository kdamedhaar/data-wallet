import React, { useCallback, useState } from "react";
import { useOcean } from "@oceanprotocol/react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { useEffect } from "react";

export default function Wallet() {
  const { ocean, connect, logout, accountId } = useOcean();

  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  const conn = async () => {
    await connect();
  };

  const init = useCallback(async () => {
    if (ocean === undefined || accountId === undefined) return;
    await ocean.assets.ownerAssets(accountId);
  }, [accountId, ocean]);

  useEffect(() => {
    init();
  }, [ocean, accountId, init]);

  const disc = async () => {
    await logout();
    await conn();
  };

  
  return (
    <>
      {accountId ? (
        <div>
          <Button id="Popover1" type="button">
            {accountId}
          </Button>
          <Popover
            placement="bottom"
            isOpen={popoverOpen}
            target="Popover1"
            toggle={toggle}
          >
            <PopoverHeader>Popover Title</PopoverHeader>
            <PopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </PopoverBody>
          </Popover>
        </div>
      ) : (
        <div>
          <Button onClick={conn}>Connect</Button>
        </div>
      )}
    </>
  );
}
