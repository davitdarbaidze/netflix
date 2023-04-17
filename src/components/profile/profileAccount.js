import React, {useState} from "react";
import SiteHeader from "@/components/SiteHeader";
import styles from "../../styles/profile.module.scss";
import { useFetchUser } from "@/lib/authContext";
import { getEmailFromLocalCookie } from "@/lib/auth";
import { getIdFromLocalCookie } from "@/lib/auth";
import Divider from "@/components/divider";
import Image from "next/image";
import Link from "next/link";
import ReEnterUserPass from "../reEnterUserPass";
import { useRouter } from "next/router";
import useGetTimeSinceLogin from "../../hooks/useGetTimeSinceLogin"
import ChangeDataInput from "./changeDataInput";


export default function ProfileAccount() {
  const { user } = useFetchUser();
  const email = getEmailFromLocalCookie();
  const id = getIdFromLocalCookie();
  const [toggle, setToggle] = useState(false);
  const [toggleModify, setToggleModify] = useState([]);
  const timeSinceLogin = useGetTimeSinceLogin()
  const router = useRouter();


  //component for buttons with arrow,since there is multiple buttons with same style
  const ButtonWithArrow = ({ buttonText, inputName }) => {
  
    return (
      <div style={{textDecoration:'none'}} >
      <div className={styles.buttonContainer} onClick={e => handleClick(e)}>
          <button>{buttonText}</button>
          {toggleModify.includes(buttonText) ? <Image loading="eager" height={25} width={25} src={'/chevronDown.svg'} alt="down arrow icon"/> : <Image loading="eager" height={25} width={25} src={'/chevronForward.svg'} alt="arrow icon"/>}
      </div>
      {toggleModify.includes(buttonText) ? <ChangeDataInput inputType={buttonText}/> : ''}
      </div>
    );
  };

  
  //function for toggling changing email,password etc divs
  const modify = (e) => {
    if(toggleModify.includes(e.target.innerText)){
      setToggleModify(toggleModify.filter(item => item !== e.target.innerText))
      return
    }else{
      setToggleModify([...toggleModify, e.target.innerText])
    }
  }

  //function which toggles password reentry window if case it's been more than 5 minute
  //since user logged in, otherwise it calls data modify function
  function handleClick(e) {
    if(timeSinceLogin.minutes > 5){
      
      setToggle(!toggle);
    }else{
      modify(e);
    } 
  }


  return (
    <div>
      
      {user ? (
        <div>
          <SiteHeader />
          
          {toggle ? <ReEnterUserPass toggleValue={toggle} toggle={setToggle}/> : ''}
          <div className={styles.ProfileContainer}>
          
            
            <h3 >Account</h3>
            
            <p>Member since {new Date().toLocaleDateString("en-US")}</p>
          
            <div className={styles.Account}>
              <div>
                <p>Membership & Billing</p>
                <ul>
                  <li style={{ fontWeight: "bold", color: "black" }}>
                    {email}
                  </li>
                  <li>Password: ********</li>
                  <li>Phone number: {id}</li>
                </ul>
                <div className={styles.ChangeButtons}>
                  <ButtonWithArrow href="/modify/account/data" buttonText="Change email"/>
                  <ButtonWithArrow href="/modify/account/data" buttonText="Change password" />
                  <ButtonWithArrow href="/modify/account/data" buttonText="Change phone number" />
                </div>
                <Divider className={styles.divider}></Divider>
                <div className={styles.Billing}>
                  <div style={{ padding: "0 1rem 0 1rem", fontWeight: "bold" }}>
                    **** **** **** 0759
                  </div>
                  <ul>
                    <div style={{ border: "0" , paddingBottom:'1rem'}}>
                      Your next billing date is:{" "}
                      {new Date().toLocaleDateString("en-US")}
                    </div>
                    <ButtonWithArrow href="/modify/account/payment" buttonText="Manage payment info" />
                    <ButtonWithArrow href="/modify/account/payment" buttonText="Add backup payment method" />
                    <ButtonWithArrow href="/modify/account/payment" buttonText="Billing details" />
                    <ButtonWithArrow href="/modify/account/payment" buttonText="Change billing day" />
                  </ul>
                </div>
                <Divider className={styles.divider}></Divider>
                <div>
                  <ul className={styles.Gifts}>
                    <Link href="/gifts"><button>Redeem gift card or promo code</button></Link>
                    <Link href="/gifts"><button>Where to buy gift cards</button></Link>
                  </ul>
                </div>
                <div className={styles.Cancel} style={{textDecoration:'none'}}>
                  <Link href={'/modify/account/data'}>
                  <button className={styles.CancelMembership}>
                    Cancel Membership
                  </button>
                  </Link>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Please login from home page</p>
      )}
    </div>
  );
}
