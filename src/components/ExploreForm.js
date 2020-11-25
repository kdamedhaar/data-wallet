import React, { useState } from "react";
import classNames from "classnames";
import { usePublish } from "@oceanprotocol/react";
import Navbar from "./Navbar";
import "./Component.css";

export default function CreateForm(props) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearch() {
    setIsLoading(true);
    try {
      const url = `https://aquarius.commons.oceanprotocol.com/api/v1/aquarius/assets/ddo/query?text=${query}&offset=500`;

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
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className={isLoading ? "disabled " : "visible form"}>
        <h1 className="explore"> Explore Datatokens</h1>
        <form>
          <div className="formField">
            <label className="formLabel" for="query">
              {" "}
              Search Query :{" "}
            </label>
            <br />
            <input
              className="formInput"
              type="text"
              id="query"
              name="query"
              placeholder="Life of Pie"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <br />
          </div>

          <div className="formField">
            <button
              className="btn"
              type="submit"
              onClick={e => handleSearch(e)}
            >
              {" "}
              Search{" "}
            </button>
            <button className="btn" onClick={() => {}}>
              {" "}
              Cancel{" "}
            </button>
          </div>
        </form>
      </div>
      <div className={isLoading ? "visible loaderContainer" : "disabled"}>
        <div className={isLoading ? "loader" : "disabled"} />
        <h1>Searching Datatokens..</h1>
      </div>
    </>
  );
}
