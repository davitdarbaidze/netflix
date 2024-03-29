import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import { REVIEWS } from "@/graphql/queries";
import { useState, useContext } from "react";
import { useFetchUser } from "@/lib/authContext";
import styles from "../styles/siteHeader.module.scss";
import FrequentQuestions from "@/components/frequentQuestions";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import Divider from "@/components/divider";
import Media from "@/components/media";
import { createClient } from "pexels";
import { useRouter } from "next/router";

export default function Home({videosData}) {

  const { data, error, loading } = useQuery(REVIEWS);
  const router = useRouter();
  // if (qloading) return <p>loading....</p>;
  // if (qerror) return <p>error</p>;

  const { user, userLoading } = useFetchUser();

  const [userData, setUserData] = useState({
    email: "",
  });
  const handleCHange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleStart = () => {
    sessionStorage.setItem('getStartedEmail', userData.email)
    router.push('/register')
  }



  const getStarted = () => {
    return (
      <div className={styles.getStartedContainer}>
        <input
          className={styles.inputEmail}
          type="email"
          name="email"
          placeholder="Email address"
          onChange={handleCHange}
          // value={userData.email}
        ></input>
        <button onClick={handleStart} onTouchEnd={handleStart} className={styles.getStarted}>Get Started</button>
      </div>
    );
  };

  return (
    <>
      <SiteHeader/>
      {!userLoading &&
        (user ? (
          <div>            
            {loading ? (
              <p>loading</p>
            ) : (
              <>
              <Divider className={styles.divider} />
              <Media/>
              </>              
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
                <div style={{width:'80%'}}>
                  {getStarted()}
                </div>
            </div>
          </div>
        ))}
    </>
  );
}
