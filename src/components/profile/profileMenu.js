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
        <div>
          <Image
            src="/pencilIcon.png"
            alt="manage profiles"
            width={27}
            height={27}
          ></Image>
          Manage Profiles
        </div>
        </Link>
        <Link href='/profile'>
          <div>
            <Image
              src="/profileIcon.png"
              alt="Go to profile managment"
              width={27}
              height={27}
            ></Image>
            Account
          </div>
        </Link>
        <Link href='/help'>
        <div>
          <Image
            src="/helpIcon.png"
            alt="help center"
            width={27}
            height={27}
          ></Image>
          Help Center
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
