import React, { useState } from "react";
import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import { ALL_CATEGORIES } from "@/graphql/queries";
import styles from "../styles/siteHeader.module.scss";
import { useFetchUser } from "@/lib/authContext";
import HeadingVideo from "./headingVideo";
import Image from "next/image";
import Languages from "./languages";
import DropdownMenu from "./dropdown";
import ProfileMenu from "./profile/profileMenu";
import { useRouter } from 'next/router'

export default function SiteHeader(props) {
  // const { data, error, loading } = useQuery(ALL_CATEGORIES);

  // if (loading) return <p>loading....</p>;
  // if (error) return <p>{error.message}</p>;

  const [userData, setUserData] = useState({
    identifier: "",
    password: "",
    email: "",
  });

  const { user, userLoading } = useFetchUser();
  const languages = ["English", "Spanish", "French", "German"];
  const [toggleProfile, setToggleProfile] = useState(false);
  const router = useRouter()

  //Single handleChange function which works with all the inputs
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

  const handleProfileClick = () => {
    setToggleProfile(!toggleProfile);
  };

  return (
    <>
      {!userLoading &&
        (user ? (
          <div className={styles.loggedContainer}>
            <div className={`${styles.loggedContainerNav} ${ router.pathname === '/' ? '' : styles.blackBackground}`}>
              <div className={styles.loggedContainerNavLeft}>
                <div>
                  <Link href="/">
                    <Image
                      src="/netflix.png"
                      width={80}
                      height={45}
                      alt="Netflix logo"
                    ></Image>
                  </Link>
                </div>
                <DropdownMenu
                  showMainMenu={true}
                  className={styles.some}
                ></DropdownMenu>
              </div>
              <div>
                <span>
                  <div
                    onClick={handleProfileClick}
                    onMouseLeave={handleProfileClick}
                    className={styles.loggedContainerProfile}
                  >
                    {toggleProfile ? (
                      <ProfileMenu></ProfileMenu>
                    ) : (
                      ""
                    )}
                    <Image
                      src="/userIcon.png"
                      alt="UserIcon"
                      width={40}
                      height={40}
                      style={{ borderRadius: "5px"}}
                    ></Image>
                  </div>
                </span>
              </div>
            </div>
            {router.pathname === "/" ? <div className={styles.videoContainer}>
              <div className={styles.videoOverlay}></div>
              <HeadingVideo />
            </div> : ""}
            
          </div>
        ) : (
          // not logged in user part
          <div
            className={styles.siteHeader}
            style={{ backgroundImage: "url(/bg.jpg)" }}
          >
            <div className={styles.container}>
              <nav className={styles.navigationContainer}>
                <div className={styles.navigation}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <Link href="/">
                      <Image
                        src="/netflix.png"
                        width={80}
                        height={45}
                        alt="Netflix logo"
                      ></Image>
                    </Link>
                  </div>
                  {!userLoading && !user ? (
                    <span className={styles.spanTitle}>
                      <div className={styles.languageSelect}>
                        <Languages className={styles.some} />
                        <Link href="/login">
                          <button> Sign in </button>
                        </Link>
                      </div>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                {!userLoading &&
                  (user ? (
                    <div></div>
                  ) : (
                    <div className={styles.navTitle}>
                      <h1>Unlimited movies, TV shows, and more.</h1>
                      <h3>Watch anywhere. Cancel anytime.</h3>
                      <h3 style={{ paddingBottom: "1rem" }}>
                        <br />
                        Ready to watch? Enter your email to create or restart
                        your membership
                      </h3>
                      {getStarted()}
                    </div>
                  ))}
              </nav>
            </div>
          </div>
        ))}{" "}
    </>
  );
}
