import React from "react";

const TotalCases = ({ resource }) => {
  const data = resource.totalcases.read();

  return (
    <div className="totalcases__grid">
      <div
        className="totalcases__grid__item"
        style={{ borderColor: "rgba(255, 99, 132, 1)" }}
      >
        <p>
          <strong>Total</strong> <br />
          <strong>Confirmed</strong> <br />
          {data?.confirmed?.value}{" "}
        </p>
      </div>
      <div
        className="totalcases__grid__item"
        style={{ borderColor: "rgba(54, 162, 235, 1)" }}
      >
        <p>
          <strong>Total</strong> <br />
          <strong>Recovered</strong> <br />
          {data?.recovered?.value}
        </p>
      </div>
      <div
        className="totalcases__grid__item"
        style={{ borderColor: "rgba(255, 206, 86, 1)" }}
      >
        <p>
          <strong>Total</strong> <br />
          <strong>Deaths</strong> <br />
          {data?.deaths?.value}
        </p>
      </div>
    </div>
  );
};

export default TotalCases;
