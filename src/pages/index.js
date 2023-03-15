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

export default function Home() {
  const { data, error, loading } = useQuery(REVIEWS);
  // if (qloading) return <p>loading....</p>;
  // if (qerror) return <p>error</p>;

  const { user, userLoading } = useFetchUser();

  const divider = () => {
    return <div className={styles.divider}></div>;
  };

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

      {!userLoading &&
        (user ? (
          <div>
            {loading ? (
              <p>loading</p>
            ) : (
              <div>
                {data.reviews.data.map((review) => (
                  <div key={review.id}>
                    <div>{review.attributes.rating}</div>
                    <div>{review.attributes.title}</div>
                    <p>{review.attributes.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          
          <div>
            {divider()}
            
            <div className={styles.moreOptions}>
            
              <div>
                <h1>Enjoy on your TV.</h1>
                <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast,</h3>
                <h3>Apple TV, Blu-ray players, and more.</h3>
              </div>
              <Image src="/tv.png" width={364} height={224}></Image>
            </div>
            {divider()}
            <div className={styles.moreOptions}>
              <Image
                src="/mobile.jpg"
                width={320}
                height={256}
                className={styles.lgViewImage}
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
              ></Image>
            </div>
            {divider()}
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
              ></Image>
              <Image
                src="/device-pile.png"
                width={320}
                height={240}
                className={styles.mobileViewImage}
              ></Image>
            </div>
            {divider()}
            <div className={styles.moreOptions}>
              <Image
                src="/kids.png"
                width={320}
                height={256}
                className={styles.lgViewImage}
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
              ></Image>
            </div>
            {divider()}
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
