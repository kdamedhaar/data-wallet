import React, { useState } from "react";
import classNames from "classnames";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { usePublish } from "@oceanprotocol/react";
import "./Component.css";

export default function CreateForm(props) {
  let url =
    "https://raw.githubusercontent.com/tbertinmahieux/MSongsDB/master/Tasks_Demos/CoverSongs/shs_dataset_test.txt";
  const { publish, publishStepText, isLoading } = usePublish();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [license, setLicense] = useState("MIT");
  const [bookurl, setBookurl] = useState("");
  const [maxDownloads, setMaxDownloads] = useState(10);
  const [price, setPrice] = useState(0);

  const [ddo, setDdo] = useState(undefined);

  const asset = {
    main: {
      type: "dataset",
      name: title,
      dateCreated: new Date(Date.now()).toISOString().split(".")[0] + "Z", // remove milliseconds
      author,
      license,

      files: [
        {
          url: bookurl,
          checksum: "efb2c764274b745f5fc37f97c6b0e761",
          contentLength: "4535431",
          contentType: "text/csv",
          encoding: "UTF-8",
          compression: "zip"
        }
      ]
    },
    additionalInformation: {
      creator: "dataWallet12345",
      description
    }
  };

  const publishAsset = async e => {
    e.preventDefault();

    const priceOptions = {
      price,
      tokensToMint: maxDownloads,
      type: "fixed",
      weightOnDataToken: "",
      liquidityProviderFee: ""
    };

    const ddo = await publish(asset, priceOptions, "access");
    console.log(ddo);
    setDdo(ddo);
  };

  return (
    <>
      <div className="pageContainer form createPage fullPage">
        <h1> Create Datatokens</h1>
        <Form className="formContainer">
          <FormGroup row>
            <Label sm={4} for="title">
              {" "}
              Name :{" "}
            </Label>
            <Col sm={8}>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Life of Pie"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={4} for="description">
              {" "}
              Description :
            </Label>
            <Col sm={8}>
              <Input
                rows="10"
                columns="50"
                type="textarea"
                id="description"
                name="description"
                placeholder="My first book"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={4} for="bookurl">
              Data URL :
            </Label>
            <Col sm={8}>
              <Input
                type="text"
                id="bookurl"
                name="bookurl"
                placeholder="https://www.drive.google.com/mybook123.pdf"
                value={bookurl}
                onChange={e => setBookurl(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={4} for="author">
              Owner :
            </Label>
            <Col sm={8}>
              <Input
                type="text"
                id="author"
                name="author"
                placeholder="John Wick"
                value={author}
                onChange={e => setAuthor(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={4} for="license">
              License :
            </Label>
            <Col sm={8}>
              <Input
                type="text"
                id="license"
                name="license"
                placeholder="MIT"
                value={license}
                onChange={e => setLicense(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={4} for="maxDownloads">
              Maximum Token Supply :
            </Label>
            <Col sm={8}>
              <Input
                type="text"
                id="maxDownloads"
                name="maxDownloads"
                placeholder="10"
                value={maxDownloads}
                onChange={e => setMaxDownloads(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={4} for="price">
              Price :
            </Label>
            <Col sm={8}>
              <Input
                type="text"
                id="price"
                name="price"
                placeholder="1"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Button
              className="btn"
              type="submit"
              onClick={e => publishAsset(e)}
            >
              {" "}
              Create{" "}
            </Button>
            <Button className="btn" onClick={() => {}}>
              {" "}
              Cancel{" "}
            </Button>
          </FormGroup>
        </Form>
      </div>
      <div className={isLoading ? "visible loaderContainer" : "disabled"}>
        <div className={isLoading ? "loader" : "disabled"} />
        <h1 className="create">
          {publishStepText ? publishStepText : "Creating Datatokens.."}
        </h1>
      </div>
      <div className={ddo ? "visible" : "disabled"}>DID: {ddo && ddo.id} </div>
    </>
  );
}
