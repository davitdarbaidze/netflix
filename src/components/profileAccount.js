import React from 'react'
import SiteHeader from "@/components/SiteHeader";
import styles from "../styles/profile.module.scss";
import { useFetchUser } from "@/lib/authContext";
import { getEmailFromLocalCookie } from "@/lib/auth";
import { getIdFromLocalCookie } from "@/lib/auth";
import Divider from "@/components/divider";



export default function ProfileAccount() {

    const { user } = useFetchUser();
    const email = getEmailFromLocalCookie();
    const id = getIdFromLocalCookie();

  return (
    <div>{user ? (
        <div>
          <SiteHeader />

          <div className={styles.ProfileContainer}>
            <h3>Account</h3>
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
                  <button>Change email</button>
                  <button>Change password</button>
                  <button>Change phone number</button>
                </div>
                <Divider className={styles.divider}></Divider>
                <div className={styles.Billing}>
                  <div style={{ padding: "0 1rem 0 1rem", fontWeight: "bold" }}>
                    **** **** **** 0759
                  </div>
                  <ul>
                    <button style={{ border: "0" }}>
                      Your next billing date is:{" "}
                      {new Date().toLocaleDateString("en-US")}
                    </button>
                    <button>Manage payment info</button>
                    <button>Add backup payment method</button>
                    <button>Billing details</button>
                    <button>Change billing day</button>
                  </ul>
                </div>
                <Divider className={styles.divider}></Divider>
                <div>
                  <ul className={styles.Gifts}>
                    <button>Redeem gift card or promo code</button>
                    <button>Where to buy gift cards</button>
                  </ul>
                </div>
                  <button className={styles.CancelMembership}>
                    Cancel Membership
                  </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Please login from home page</p>
      )}</div>
  )
}
