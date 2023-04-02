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
import Logout from "./logout";

export default function SiteHeader() {
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

  //Single handleChange function which works with all the inputs
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
          // value={userData.email}
        ></input>
        <button className={styles.getStarted}>Get Started</button>
      </div>
    );
  };


  const handleClick = () => {
    console.log("clicked");
  };

  // const {user, loading} = useUser();

  return (
    <div
      className={styles.siteHeader}
      style={{ backgroundImage: "url(/bg.jpg)" }}
    >
      <div className={styles.container}>
        {/* <nav className="categories">
        <span>Filter by category: </span>
        {data.categories.data.map((item) => (
          
            <Link key={item.id} href={`/category/${item.id}`}>{item.attributes.Name}</Link>
          
        ))}
      </nav> */}
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
              {!userLoading &&
                (user ? (
                  <div>
                    <DropdownMenu/>
                  </div>
                ) : (
                  ""
                ))}
            </div>
            {!userLoading &&
              (user ? (
                <div>
                  <span>
                    <Link href="/profile">Profile</Link>
                  </span>
                  <Logout logoutPlaceholder='Logout'></Logout>
                </div>
              ) : (
                ""
              ))}
            {/* {!userLoading &&
              (user ? (
                
                <></>
              ) : (
                ""
              ))} */}
            {!userLoading && !user ? (
              <span className={styles.spanTitle}>
                <div className={styles.languageSelect} onClick={handleClick}>
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
          {!userLoading && (user ? <HeadingVideo /> : "")}
          {!userLoading &&
            (user ? (
              <div>
                {/* {loading ? (
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
              )} */}
              </div>
            ) : (
              <div className={styles.navTitle}>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <h3 style={{ paddingBottom: "1rem" }}>
                  <br />
                  Ready to watch? Enter your email to create or restart your
                  membership
                </h3>
                {/* <div className={styles.getStartedContainer}>
                  <input
                    className={styles.inputEmail}
                    type="email"
                    name="email"
                    placeholder="Email address"
                    onChange={handleCHange}
                    value={userData.email}
                  ></input>
                  <button className={styles.getStarted}>Get Started</button>
                </div> */}
                {getStarted()}
              </div>
            ))}
        </nav>
      </div>
    </div>
  );
}
