import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { useOcean } from "@oceanprotocol/react";
import Grid from "./Grid";
import "./Component.css";
import Navbar from "./Navbar";

const cardData = [
  {
    name: "1) My First Data Asset",
    description:
      "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 10,
    max: 1000,
    author: "John Wick",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  },
  {
    name: "2) My Second Data Asset",
    description:
      "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 1,
    max: 25,
    author: "John Wayne",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  },
  {
    name: "3) My Third Asset",
    description:
      "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 0,
    max: 1000,
    author: "John Wayne",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  },
  {
    name: "4) Fourth Asset",
    description:
      "This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 1,
    max: 100,
    author: "John Wayne",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  },
  {
    name: "5) My First Data Asset",
    description:
      "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 10,
    max: 1000,
    author: "John Wick",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  },
  {
    name: "6) My Second Data Asset",
    description:
      "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 1,
    max: 25,
    author: "John Wayne",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  },
  {
    name: "7) My Third Asset",
    description:
      "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 0,
    max: 1000,
    author: "John Wayne",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  },
  {
    name: "8) Fourth Asset",
    description:
      "This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 1,
    max: 100,
    author: "John Wayne",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  },
  {
    name: "9) My First Data Asset",
    description:
      "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 10,
    max: 1000,
    author: "John Wick",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  },
  {
    name: "10) My Second Data Asset",
    description:
      "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 1,
    max: 25,
    author: "John Wayne",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  },
  {
    name: "11) My Third Asset",
    description:
      "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 0,
    max: 1000,
    author: "John Wayne",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  },
  {
    name: "12) Fourth Asset",
    description:
      "This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 1,
    max: 100,
    author: "John Wayne",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  },
  {
    name: "13) My First Data Asset",
    description:
      "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 10,
    max: 1000,
    author: "John Wick",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  },
  {
    name: "14) My Second Data Asset",
    description:
      "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 1,
    max: 25,
    author: "John Wayne",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  },
  {
    name: "15) My Third Asset",
    description:
      "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 0,
    max: 1000,
    author: "John Wayne",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  },
  {
    name: "16) Fourth Asset",
    description:
      "This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
    price: 1,
    max: 100,
    author: "John Wayne",
    sample:
      "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
  }
];

export default function ManageForm() {
  const { ocean, connect, logout, accountId } = useOcean();
  const [inProgress, setInProgress] = useState(true);
  const [datasets, setDatasets] = useState(null);

  useEffect(() => {
    fetchDataAssets();
  });

  async function fetchDataAssets() {
    try {
      const url = `https://aquarius.rinkeby.oceanprotocol.com/api/v1/aquarius/assets/ddo/query?text=${accountId}&offset=500`;

      let encodedUrl = encodeURI(url);
      const response = await fetch(encodedUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });
      const { results } = await response.json();

      if (response.status == 200) {
        setInProgress(false);
        setDatasets(results.slice());
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  function renderResults() {
    return accountId ? (
      inProgress ? (
        <div className="loaderContainer">
          <div className="loader" />
          <h1 className="manage">Getting your datatokens..</h1>
        </div>
      ) : datasets ? (
        <Grid data={datasets} />
      ) : (
        ""
      )
    ) : (
      <div className="loaderContainer">
        <h1 className="manage">Connect your wallet..</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {renderResults()}
    </div>
  );
}
