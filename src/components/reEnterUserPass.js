import React, { useState } from "react";
import styles from "../styles/reEnterUserPass.module.scss";
import { getUserFromLocalCookie } from "@/lib/auth";
import { setToken } from "@/lib/auth";

export default function ReEnterUserPass(props) {

  const [userData, setUserData] = useState({
    username: getUserFromLocalCookie(),
    password: "",
    repeatPassword: "",
  });
  const [error, setError] = useState("");


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
          identifier: userData.username,
          password: userData.password,
          
        }),
      }
    );

    if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData)
        setError(errorData.error.name);
        return;
      }
    
    const responseData = await response.json();
    setToken(responseData,true)
    props.toggle()
    
    
  };

  const checkPassword = () => {
    if (userData.password === userData.repeatPassword) {
      return true;
    } else {
      return false;
    }
  };

  

  return (
    <div className={styles.cover} >
      <div>
        <form onSubmit={handleSubmit}>
            <div className={styles.Error}> {error ? <p>{error}</p> : ''} </div>
          <input
            placeholder="Type password"
            type="password"
            name="password"
            onChange={handleCHange}
            required
          ></input>
          <input 
          placeholder="Re-enter password" 
          name="repeatPassword"
          type="password"
          onChange={handleCHange}
          required
          ></input>
          <button type="submit">Verify</button>
          <button onClick={props.toggle}>close</button>
        </form>
      </div>
    </div>
  );
}
