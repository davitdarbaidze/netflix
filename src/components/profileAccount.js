import React, {useState} from "react";
import SiteHeader from "@/components/SiteHeader";
import styles from "../styles/profile.module.scss";
import { useFetchUser } from "@/lib/authContext";
import { getEmailFromLocalCookie } from "@/lib/auth";
import { getIdFromLocalCookie } from "@/lib/auth";
import Divider from "@/components/divider";
import Image from "next/image";
import Link from "next/link";
import ReEnterUserPass from "./reEnterUserPass";
import { useRouter } from "next/router";


export default function ProfileAccount() {
  const { user } = useFetchUser();
  const email = getEmailFromLocalCookie();
  const id = getIdFromLocalCookie();
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  

  const togglePasswordCheckWindow = (e) => {
    if(e){
      e.preventDefault();
    }
    console.log(e)
    setToggle(!toggle);
    if(toggle){
      // router.push(href)
    }else{
      console.log('waiting for password check')
    }
    // router.push(href);
  };


  //component for buttons with arrow,since there is multiple buttons with same style
  const ButtonWithArrow = ({ href, buttonText }) => {
    return (
      <Link href={href} style={{textDecoration:'none'}} >
      <div className={styles.buttonContainer} onClick={e => togglePasswordCheckWindow(e)}>
          <button>{buttonText}</button>
        <Image height={25} width={25} src={'/chevronForward.svg'} alt="arrow icon" />
      </div>
      </Link>
    );
  };

  return (
    <div>
      
      {user ? (
        <div>
          
          <SiteHeader />
          
          {toggle ? <ReEnterUserPass toggleValue={toggle} toggle={togglePasswordCheckWindow}/> : ''}
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
                  <ButtonWithArrow href="/modify/account/data" buttonText="Change email" />
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
