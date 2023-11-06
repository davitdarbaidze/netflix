import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/register.module.scss";
import { setToken } from "@/lib/auth";
import Languages from "@/components/languages";
import Link from "next/link";
import Divider from "@/components/divider";
import { zoomOutHTMLBodyLevel } from "@/lib/generalFunctions";
import Error from "@/components/error";

export default function Register() {
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    repeatPassword: "",
    email: "",
  });
  const [error, setError] = useState('')

  const handleCHange = (e) => {
    if(sessionStorage.getItem("getStartedEmail")){
      if(email.length == 0){
        setEmail(sessionStorage.getItem("getStartedEmail"))
      }
    }

    //email is handled separately because 
    //if user has entered on main page emai
    //it is retrived it from session Storage
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    if(email.length == 0){
      setEmail(sessionStorage.getItem('getStartedEmail'))
    }
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    sessionStorage.removeItem("getStartedEmail")


    //pay attention that email 
    //doesn't come from same Object 'userData' it's separate state
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_PORT}/api/auth/local/register`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: userData.password,
          username: userData.username,
        }),
        method: "POST",
      }
      );
    const responseData = await response.json();
    
    if(responseData.error){
      setError(responseData.error.message)
    }else{
      setToken(responseData);      
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
                  width={100}
                  height={45}
                  alt="Netflix Logo"
                ></Image>
              </Link>
            </div>
            <div className={styles.middleContainer}>
              <div className={styles.middle}>
                <h1 style={{ alignSelf: "flex-start" }}>Register</h1>
                {error.length > 0 && <Error message={error}></Error>}
                <form onSubmit={handleSubmit} className={styles.form}>
                  <input
                    type="text"
                    name="username"
                    onChange={handleCHange}
                    onBlur={zoomOutHTMLBodyLevel}
                    placeholder="Username"
                    required
                    onFocus={()=> setError('')}
                  ></input>
                  <input
                    type="text"
                    name="email"
                    onChange={handleCHange}
                    onBlur={zoomOutHTMLBodyLevel}
                    placeholder="Email"
                    value={email}
                    required
                    onFocus={()=> setError('')}
                  ></input>
                  <input
                    type="password"
                    name="password"
                    onChange={handleCHange}
                    onBlur={zoomOutHTMLBodyLevel}
                    placeholder="Password"
                    required
                    onFocus={()=> setError('')}
                  ></input>
                  <input
                    type="password"
                    name="repeatPassword"
                    onChange={handleCHange}
                    onBlur={zoomOutHTMLBodyLevel}
                    placeholder="Repeat Password"
                    required
                    onFocus={()=> setError('')}
                  ></input>

                  <button type="submit">
                    <a>Register</a>
                  </button>
                </form>
                <div className={styles.helpContainer}>
                  <Link href="/help">
                    <label>Need help?</label>
                  </Link>
                </div>
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
