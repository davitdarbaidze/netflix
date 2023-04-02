import React, { useState } from "react";
import styles from "../styles/browse.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useFetchUser } from "@/lib/authContext";
import Logout from "../components/logout";
import Divider from "@/components/divider";
import DropdownMenu from "@/components/dropdown";

const CATEGORIES = ["Action", "Comedy", "Drama", "Horror", "Whitty"];

export default function Browse() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  const { user, userLoading } = useFetchUser();
  console.log(isMenuOpen);

  return (
    <div className={styles.container}>
      <div className={styles.containerNav}>
        <div className={styles.containerNavLeft}>
          <div>
            <button className={styles.containerMenuToggle} onClick={toggleMenu}>
              <Image
                src="/menu.svg"
                width={30}
                height={30}
                alt="Globe icon"
                id="globe"
              />
            </button>
            {isMenuOpen && (
              <span
                className={`${styles.containerMenuContent} ${
                  isMenuOpen ? styles.open : ""
                }`}
              >
                <ul>
                  <div>
                    {/* capitalize the first letter of username */}
                    <li>{user[0].toUpperCase() + user.substring(1)}</li>
                    <li>
                      <Link href="/help">Help Center</Link>
                    </li>
                    <li>
                      <Logout logoutPlaceholder="Sing out of Netflix"></Logout>
                    </li>
                  </div>
                  <Divider className={styles.divider}></Divider>
                  <div>
                    {CATEGORIES.map((category, index) => (
                      <li key={index}>
                        <Link href={`browse/${category.toLowerCase()}`}>
                          {category}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </span>
            )}
          </div>
          <Image
            src="/netflix.png"
            width={80}
            height={45}
            alt="Netflix logo"
          ></Image>
          <DropdownMenu showMainMenu={true} className={styles.some}></DropdownMenu>
        </div>
        <div className={styles.containerNavRight}>
          <input type="search" placeholder="Search"></input>
        </div>
      </div>

      <div className={styles.containerContent}></div>
    </div>
  );
}
