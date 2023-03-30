import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import { REVIEWS } from "@/graphql/queries";
import { setToken, unsetToken } from "@/lib/auth";
import { useState } from "react";
import Link from "next/link";
import { useUser, useFetchUser } from "@/lib/authContext";
import styles from "../styles/siteHeader.module.scss";
import FrequentQuestions from "@/components/frequentQuestions";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import Divider from "@/components/divider";
import Media from "@/components/media";
import MoviesCarousel from "../components/carousel.js";
import MyCarousel from "@/components/test2";




export default function Home() {


  const { data, error, loading } = useQuery(REVIEWS);
  // if (qloading) return <p>loading....</p>;
  // if (qerror) return <p>error</p>;

  const { user, userLoading } = useFetchUser();

  const [userData, setUserData] = useState({
    email: "",
  });
  const handleCHange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const getStarted = () => {
    return (
      <div className={styles.getStartedContainer}>
        <input
          className={styles.inputEmail}
          type="email"
          name="email"
          placeholder="Email address"
          onChange={handleCHange}
        ></input>
        
        <button className={styles.getStarted}>Get Started</button>
        
      </div>
    );
  };

  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <SiteHeader/>
      
      {/* <MoviesCarousel/> */}
      {/* <MyCarousel></MyCarousel> */}
      {/* <MyCarousel></MyCarousel> */}
      {!userLoading &&
        (user ? (
          <div>
            {loading ? (
              <p>loading</p>
            ) : (
              <Media/>
            )}
          </div>
        ) : (
          
          <div>
            <Divider className={styles.divider} />
            
            <div className={styles.moreOptions}>
            
              <div>
                <h1>Enjoy on your TV.</h1>
                <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast,</h3>
                <h3>Apple TV, Blu-ray players, and more.</h3>
              </div>
              <Image src="/tv.png" width={364} height={224} alt='tv-image'></Image>
            </div>
            <Divider className={styles.divider} />
            <div className={styles.moreOptions}>
              <Image
                src="/mobile.jpg"
                width={320}
                height={256}
                className={styles.lgViewImage}
                alt='mobile-image'
              ></Image>
              <div>
                <h1>Download your shows to watch offline.</h1>
                <h3>
                  Save your favorites easily and always have something to watch.
                </h3>
              </div>
              <Image
                src="/mobile.jpg"
                width={320}
                height={240}
                className={styles.mobileViewImage}
                alt='mobile-image'
              ></Image>
            </div>
            <Divider className={styles.divider} />
            <div className={styles.moreOptions}>
              <div>
                <h1>Watch everywhere.</h1>
                <h3>Stream unlimited movies and TV shows on your phone,</h3>
                <h3>tablet, laptop, and TV without paying more.</h3>
              </div>
              <Image
                src="/device-pile.png"
                width={320}
                height={256}
                className={styles.lgViewImage}
                alt='device-pile-image'
              ></Image>
              <Image
                src="/device-pile.png"
                width={320}
                height={240}
                className={styles.mobileViewImage}
                alt='device-pile-image'
              ></Image>
            </div>
            <Divider className={styles.divider} />
            <div className={styles.moreOptions}>
              <Image
                src="/kids.png"
                width={320}
                height={256}
                className={styles.lgViewImage}
                alt='kids-image'
              ></Image>
              <div>
                <h1>Create profiles for kids.</h1>
                <h3>
                  Send kids on adventures with their favorite characters in
                </h3>
                <h3>a space made just for them—free with your membership.</h3>
              </div>
              <Image
                src="/kids.png"
                width={320}
                height={240}
                className={styles.mobileViewImage}
                alt='kids-image'
              ></Image>
            </div>
            <Divider className={styles.divider} />
            <div className={`${styles.moreOptions} ${styles.questions}`}>          
              
              <FrequentQuestions/>
              <h3 style={{ paddingBottom: "1rem" }}>
                  <br />
                  Ready to watch? Enter your email to create or restart your
                  membership
                </h3>
                <br/>
              {getStarted()}
            </div>
          </div>
        ))}
    </>
  );
}
