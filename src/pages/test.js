import React, { useEffect, useState } from "react";
import { headers } from "../../next.config";

export default function test() {
  const [dataAPI, setDataAPI] = useState([]);
  const [some, setSome] = useState(1);

  const handleClick = () => {
    // selectionSetMatchesResult()
    setSome(some + 1);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${some}/22`,
        {
          headers: {
            accept: "application/json",
          },
        }
      );
      const responseData = await response.json();
      setDataAPI((state) => [...state,responseData]);
    }
    fetchData();
  }, [some]);

  console.log(dataAPI.flat());
  return (
    <div>
      <button onClick={handleClick}>test</button>
      <div style={{height: '20vh', overflow: 'scroll'}} >
      {dataAPI.map((data, index) => (
        <p key={index}>{JSON.stringify(data.list)}</p>
      ))}
      </div>
    </div>
  );
}
