import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import "./Component.css";
import classNames from "classnames";

export default function Grid(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function processData(data) {
      let datas = await Promise.all(
        data.map(item => {
          return { metadata: item.service[0], datatoken: item.dataTokenInfo };
        })
      );
      setData(datas);
    }
    processData(props.data);
  }, []);

  function renderCard(data) {
    console.log(data);
    let { datatoken, metadata } = data;
    if (metadata) {
      let { main, additionalInformation } = metadata.attributes;
      let { name, author } = main;
      let { description, tags } = additionalInformation;
      let { address, cap, symbol, name: dtName, minter } = datatoken;
      return (
        <div className={classNames("card", "manage")}>
          <h3>{name}</h3>
          <h4>{author}</h4>
          <h6>{tags ? tags.join(",") : ""}</h6>
        </div>
      );
    }
  }

  function renderRow(el1 = {}, el2 = {}, el3 = {}) {
    return (
      <Row>
        <Col sm={4} lg={4}>
          {renderCard(el1)}
        </Col>
        <Col sm={4} lg={4}>
          {renderCard(el2)}
        </Col>
        <Col sm={4} lg={4}>
          {renderCard(el3)}
        </Col>
      </Row>
    );
  }

  return (
    <>
      <Container style={{ width: "80%" }}>
        {data
          ? data.map((item, i) => {
              if ((i + 1) % 3 == 0 && i <= data.length) {
                return renderRow(data[i], data[i + 1], data[i + 2]);
              }
            })
          : ""}
      </Container>
    </>
  );
}
