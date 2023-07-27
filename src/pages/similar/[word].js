import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Loading from "@/components/loading";
import styles from "../../styles/moreSimilarMovies.module.scss";
import { fetchDataFromPexels } from "@/lib/generalFunctions";
import Router from "next/router";
import Image from "next/image";
import FrequentQuestions from "@/components/frequentQuestions";

export default function MoreSimilarMovies(props) {
  const [display, setDisplay] = useState(false);
  const [data, setData] = useState([]);
  const { asPath } = useRouter();
  const router = useRouter();

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

  const handleDirectToMoviePage = (e) => {
    const videoData = JSON.parse(sessionStorage.getItem("playback_data"));

    if (videoData) {
      delete videoData.link;
    }

    const newVideoData = {
      ...videoData,
      link: e.target.dataset.link,
    };

    sessionStorage.setItem("playback_data", JSON.stringify(newVideoData));
    router.push("/play");
  };

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
                <div
                  className={styles.playButton}
                  onTouchEnd={handleDirectToMoviePage}
                >
                  <Image
                    src="/play-outline.svg"
                    alt="Play movie button"
                    width={20}
                    height={20}
                  ></Image>
                  <button data-link={item.video_files.link}>Play</button>
                </div>
              </div>
            );
          })}
          <div onTouchEnd={() => { router.push("/") }} className={styles.backButton}>            
            <Image
              src="/arrowBack.svg"
              alt="Return home button"
              width={20}
              height={20}
            ></Image>
            <button>Back</button>
          </div>
          <FrequentQuestions/>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}
