import React from "react";
import styles from "../../styles/profileMenu.module.scss";
import Logout from "../logout";
import Image from "next/image";
import Link from "next/link";

export default function ProfileMenu() {
  const fakeUsers = ["Katia", "Davit", "Me"];

  return (
    <div className={styles.loggedContainerProfileMenu}>
      <div className={styles.Users}>
        {fakeUsers.map((user, index) => (
          <div key={index}>
            <Image
              alt="UserIcon"
              src="/userIcon.png"
              width={30}
              height={30}
            ></Image>
            {user}
          </div>
        ))}
      </div>
      <div className={styles.Kids}>
        <div>Kids</div>
        <Link href='/manage/profile'>
        <div className={styles.IconAndButton}>
          <Image
            src="/pencilIcon.png"
            alt="manage profiles"
            width={27}
            height={27}
          ></Image>
          <span>Manage Profiles</span>
          
        </div>
        </Link>
        <Link href='/profile'>
          <div className={styles.IconAndButton}>
            <Image
              src="/profileIcon.png"
              alt="Go to profile managment"
              width={27}
              height={27}
            ></Image>
            <span>Account</span>
          </div>
        </Link>
        <Link href='/help'>
        <div className={styles.IconAndButton}>
          <Image
            src="/helpIcon.png"
            alt="help center"
            width={27}
            height={27}
          ></Image>
          <span>Help Center</span>
        </div>
        </Link>
      </div>
      <div
        style={{
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <Logout logoutPlaceholder="Sing out of Netflix"></Logout>
      </div>
    </div>
  );
}
