import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const CountryCases = ({ country }) => {
  const [state, setstate] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      let url = await fetch(
        `https://covid19.mathdro.id/api/countries/${country}`
      );
      let res = await url.json();
      return res;
    };
    fetchApi().then((a) => setstate(a));
  }, [country]);

  const data = {
    labels: ["Confirmed", "recovered", "deaths"],
    datasets: [
      {
        label: `Confirmed Cases`,
        type: "bar",
        data: [
          state?.confirmed?.value,
          state?.recovered?.value,
          state?.deaths?.value,
        ],
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  };
  return (
    <div>
      <p>Last Updated {state?.lastUpdate}</p>
      <Bar
        width={200}
        height={200}
        data={data}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default CountryCases;
