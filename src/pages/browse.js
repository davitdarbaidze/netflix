import React, { useState, useEffect } from "react";
import styles from "../styles/browse.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useFetchUser } from "@/lib/authContext";
import Logout from "@/components/logout";
import Divider from "@/components/divider";
import MobileCarousel from "@/components/mobileCarousel";
import NormalCarousel from "@/components/normalCarousel";
import DropdownMenu from "@/components/dropdown";
import useWindowDimensions from "@/hooks/windowSize";
import HeadingVideo from "@/components/headingVideo";


const CATEGORIES = ["Action", "Comedy", "Drama", "Horror", "Whitty", "Romance","Thriller"];

export default function Browse() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, userLoading } = useFetchUser();
  const { width } = useWindowDimensions();
  const [responsive, setResponsive] = useState();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function randomCategory(list) {
    return (
      <div className={styles.randomCategory}>
        {list[Math.floor(Math.random() * list.length)]}
      </div>
    );
  }

  useEffect(() => {
    if (width < 576) {
      setResponsive(true);
    } else if (width < 992) {
      setResponsive(false);
    } else {
      setResponsive(false);
    }
  }, [width]);

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
          <Link href="/">
          <Image
            src="/netflix.png"
            width={80}
            height={45}
            alt="Netflix logo"
          ></Image>
          </Link>
          <DropdownMenu
            showMainMenu={true}
            className={styles.some}
          ></DropdownMenu>
        </div>
        
        <div className={styles.containerNavRight}>
          <input type="search" placeholder="Search"></input>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <HeadingVideo />
      </div>

      <div className={styles.containerContent}>
        {CATEGORIES.map((category, index) => (
          <div key={index}>
            <div className={styles.randomCategory}>{category}</div>
            {responsive ? <MobileCarousel /> : <NormalCarousel />}
          </div>
        ))}
      </div>
    </div>
  );
}
