import "./App.css";
import React, { Suspense } from "react";
import TotalCases from "./components/TotalCases";
import { createResource } from "./fetch";
import Img from "./images/covid 19.png";
import CountryCases from "./components/CountryCases";
import CountryInput from "./components/CountryInput";
import ErrorBoundary from "./components/ErrorBoundary";

const resource = createResource();

export default function App() {
  const [country, setCountry] = React.useState("");

  return (
    <div className="App">
      <ErrorBoundary>
        <div className="header">
          <img width="300" height="auto" src={Img} alt="loading" />
        </div>
        <Suspense fallback={<h1>Loading profile...</h1>}>
          <TotalCases resource={resource} />
        </Suspense>

        <CountryInput
          getCountry={(e) => {
            setCountry(e);
          }}
        />

        <Suspense fallback={<h1>Loading profile...</h1>}>
          <CountryCases country={country} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
