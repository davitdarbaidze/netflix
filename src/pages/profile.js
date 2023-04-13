import React from "react";
import styles from "../styles/profile.module.scss";
import ProfileAccount from "@/components/profileAccount";

export default function Profile() {


  return (
    <div className={styles.Wrapper}>
      <ProfileAccount/>
    </div>
  );
}
