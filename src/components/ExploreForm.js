import React, { useState } from "react";
import classNames from "classnames";
import { Button, Form, FormGroup, Label, Input, Row } from "reactstrap";
import { ConfigHelper } from "@oceanprotocol/lib";
import { usePublish } from "@oceanprotocol/react";
import Navbar from "./Navbar";
import { Container } from "reactstrap";
import TableContainer from "./TableContainer";
import "./Component.css";


const confighelper = new ConfigHelper();
let config = confighelper.getConfig(
  process.env.REACT_APP_NETWORK,
  process.env.REACT_APP_INFURA_KEY
);

export default function CreateForm(props) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function processData(datasets) {
    return await Promise.all(
      datasets.map(item => {
        var metadata = item.service[0];
        if (metadata) {
          if (metadata.attributes) {
            var { name, author } = metadata.attributes.main;
            var {
              address,
              cap,
              symbol,
              name: dtName,
              minter
            } = item.dataTokenInfo;
            return {
              name,
              author,
              address,
              cap,
              dtName,
              minter,
              symbol
            };
          }
        }
      })
    );
  }

  async function handleSearch() {
    setIsLoading(true);
    try {
      let aquariusUrl = config.metadataStoreUri;
      const url = `${aquariusUrl}/api/v1/aquarius/assets/ddo/query?text=${query}&offset=500`;

      let encodedUrl = encodeURI(url);
      const response = await fetch(encodedUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });
      const { results } = await response.json();
      console.log(results);
      let processedData = await processData(results);
      setData(processedData.slice());
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function renderForm() {
    return (
      <div className="pageContainer explorePage form fullPage">
        <h1 style={{ color: 'white' }}> Explore Datatokens</h1>
        <Form>
          <FormGroup className="exploreForm">
            <Input
              type="text"
              id="query"
              name="query"
              placeholder="Enter Search Query "
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Button className="btn" onClick={e => handleSearch(e)}>
              {" "}
              Search{" "}
            </Button>
            <Button className="btn" onClick={() => { }}>
              {" "}
              Cancel{" "}
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }

  function renderLoading() {
    return (
      <div className="loaderContainer">
        <div className="loader" />
        <h1>Searching datatokens..</h1>
      </div>
    )
  }

  function renderResults() {
    return (
      <Container>
        <TableContainer data={data} />
      </Container>
    )
  }

  return <div className="pageContainer">{isLoading ? renderLoading() : (data.length ? renderResults() : renderForm())}</div>
}
