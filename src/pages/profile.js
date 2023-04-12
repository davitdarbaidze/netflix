import SiteHeader from "@/components/SiteHeader";
import React from "react";
import styles from "../styles/profile.module.scss";

export default function Profile() {
  return (
    <div className={styles.Wrapper}>
      <SiteHeader />

      <div className={styles.ProfileContainer}>
        <h2>Account</h2>
        <p>Member since {new Date().toLocaleDateString("en-US")}</p>
        <div className={styles.Account}>
          <div>
            <p>Membership & Billing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
