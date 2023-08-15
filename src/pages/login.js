import React from "react";
import Image from "next/image";
import styles from "../styles/login.module.scss";
import { setToken } from "@/lib/auth";
import { useState } from "react";
import Languages from "@/components/languages";
import Divider from "@/components/divider";
import Link from "next/link";
import Error from "@/components/error";

export default function Login() {
  const [userData, setUserData] = useState({
    identifier: "",
    password: "",
    email: "",
  });

  const [error, setError] = useState('')

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
          identifier: userData.identifier.toLowerCase(),
          password: userData.password,
        }),
      }
    );
    const responseData = await response.json();

    if(responseData.error){
      setError(responseData.error.message)
    }else{
      setToken(responseData, false, new Date());
    }
  };

  return (
    <div className={styles.layout}>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.322)" }}>
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
            <div className={styles.middleContainer}>
              <div className={styles.middle}>
                <h1 style={{ alignSelf: "flex-start" }}>Sign in</h1>
                {error.length > 0 && <Error message={error}></Error>}
                <form onSubmit={handleSubmit} className={styles.form}>
                  <input
                    type="text"
                    name="identifier"
                    onChange={handleCHange}
                    placeholder="Username or Email"
                    required
                    onFocus={()=> setError('')}
                  ></input>
                  <input
                    type="password"
                    name="password"
                    onChange={handleCHange}
                    placeholder="Password"
                    required
                    onFocus={()=> setError('')}
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
                  New to Netflix?{" "}
                  <Link href="/register">
                    <button>Sign up Now</button>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.footerContainer}>
            <Divider className={styles.divider} />

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
    </div>
  );
}
