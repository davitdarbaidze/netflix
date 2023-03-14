import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import { ALL_CATEGORIES } from "@/graphql/queries";
import styles from "../styles/siteHeader.module.scss";
import { useFetchUser } from "@/lib/authContext";
import { setToken, unsetToken } from "@/lib/auth";
import { cancel } from "@/svgs/allsvgs";
import Image from "next/image";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/auth/local`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: userData.identifier,
          password: userData.password,
        }),
      }
    );
    const responseData = await response.json();
    setToken(responseData);
  };

  const logout = () => {
    unsetToken();
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
            <Link href="/">
              <Image src="/netflix.png" width={80} height={45}></Image>
            </Link>
            {!userLoading &&
              (user ? (
                <span>
                  <Link href="/profile">Profile</Link>
                </span>
              ) : (
                ""
              ))}
            {!userLoading &&
              (user ? (
                <span>
                  <a onClick={logout} style={{ cursor: "pointer" }}>
                    Logout
                  </a>
                </span>
              ) : (
                ""
              ))}
            {!userLoading && !user ? (
              <span>
                {/* <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="identifier"
              onChange={handleCHange}
              placeholder="Username"
              required
            ></input>
            <input
              type="password"
              name="password"
              onChange={handleCHange}
              placeholder="Password"
              required
            ></input>

            <button type="submit">
              <a>Login</a>
            </button>
          </form> */}
                <div className={styles.languageSelect} onClick={handleClick}>
                  <div>
                    <Image
                      src="/globe-outline.svg"
                      width={22}
                      height={22}
                      alt="Globe icon"
                      id="globe"
                    />
                    <select className={styles.customSelect}>
                      {languages.map((language) => (
                        <option key={language} value={language}>
                          {language}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className={styles.sign}> Sign in </button>
                </div>
              </span>
            ) : (
              ""
            )}
          </div>

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
                <h3>
                  Ready to watch? Enter your email to create or restart your
                  membership
                </h3>
                <div className={styles.getStartedContainer}>
                  <input
                    className={styles.inputEmail}
                    type="email"
                    name="email"
                    placeholder="Email address"
                    onChange={handleCHange}
                    value={userData.email}
                  ></input>
                  <button className={styles.getStarted}>Get Started</button>
                </div>
              </div>
            ))}
        </nav>
      </div>
    </div>
  );
}
