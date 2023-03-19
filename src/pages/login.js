import React from "react";
import Image from "next/image";
import styles from "../styles/login.module.scss";
import { setToken } from "@/lib/auth";
import { useState } from "react";
import Languages from "@/components/languages";
import Link from "next/link";

export default function login() {
  const [userData, setUserData] = useState({
    identifier: "",
    password: "",
    email: "",
  });
  const handleCHange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const divider = () => {
    return <div className={styles.divider}></div>;
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

  return (
    <div className={styles.layout}>
      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.header}>
            <Link href="/">
              {" "}
              <Image
                src="/netflix.png"
                width={80}
                height={45}
                alt="Netflix Logo"
              ></Image>
            </Link>

            <div style={{ display: "none" }}>some2</div>
          </div>
          <h1 style={{ alignSelf: "flex-start" }}>Sign in</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="identifier"
              onChange={handleCHange}
              placeholder="Username or Email"
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
              <a>Sign in</a>
            </button>
          </form>
          <div className={styles.helpContainer}>
            <div>
              <input type="checkbox" defaultChecked="checked"></input>
              <label className={styles.checkmark}>Remember me</label>
            </div>
            <label>Need help?</label>
          </div>

          <p className={styles.signUp}>
            New to Netflix? <button>Sign up Now</button>
          </p>
        </div>

        <div>
          {divider()}
          <div className={styles.footer}>
            <p>Questions? Call 80 982 787</p>
            <div className={styles.footerOptions}>
              <Link href="/faq">FAQ</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms of Use</Link>
              <Link href="/cookies">Cookie Preferences</Link>
              <Link href="/corporate">Corporate Information</Link>
              <Link href="/contact">Help Center</Link>
            </div>
            <div>
              <Languages className={styles.footerLanguages} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
