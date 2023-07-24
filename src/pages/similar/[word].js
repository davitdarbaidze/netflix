import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Loading from "@/components/loading";
import styles from "../../styles/moreSimilarMovies.module.scss";
import { fetchDataFromPexels } from "@/lib/generalFunctions";

export default function MoreSimilarMovies(props) {
  const [display, setDisplay] = useState(false);
  const [data, setData] = useState([]);
  const { asPath } = useRouter();

  useEffect(() => {
    if (data.length > 0) {
      setDisplay(true);
    }
  }, [data]);

  useEffect(() => {
    async function fetchData() {
      const similarMovies = await fetchDataFromPexels(asPath.match(/([^/]+)$/));
      setData(similarMovies);
    }
    fetchData();
  }, []);

  return (
    <div>
      {display ? (
        <div className={styles.similarMovieContainer}>
        <h1>Similar Content</h1>
          {data.map((item, index) => {
            return (
              <div className={styles.similarMovieItem} key={index}>
                <img src={item.image} alt="video Thumbnail"></img>
                <p>{item.user.name}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}
