import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "@/lib/dataContext";
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
import { createClient } from "pexels";

const CATEGORIES = [
  {
    id: 1,
    title: "You",
    imageUrl: "https://placeimg.com/640/480/animals?v=1",
  },
  {
    id: 2,
    title: "Movies",
    imageUrl: "https://placeimg.com/640/480/animals?v=2",
  },
  {
    id: 3,
    title: "Treanding Now",
    imageUrl: "https://placeimg.com/640/480/animals?v=3",
  },
  {
    id: 4,
    title: "Satires",
    imageUrl: "https://placeimg.com/640/480/animals?v=4",
  },
  {
    id: 5,
    title: "Abstract",
    imageUrl: "https://placeimg.com/640/480/animals?v=5",
  },
  {
    id: 6,
    title: "Landscape",
    imageUrl: "https://placeimg.com/640/480/animals?v=6",
  },
  {
    id: 7,
    title: "Dark",
    imageUrl: "https://placeimg.com/640/480/animals?v=7",
  },
  {
    id: 8,
    title: "Thriller",
    imageUrl: "https://placeimg.com/640/480/animals?v=8",
  },
  {
    id: 9,
    title: "Documentaries",
    imageUrl: "https://placeimg.com/640/480/animals?v=9",
  },
  {
    id: 10,
    title: "Disasters",
    imageUrl: "https://placeimg.com/640/480/animals?v=10",
  },
];

export default function Browse({ videosData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, userLoading } = useFetchUser();
  const { width } = useWindowDimensions();
  const [responsive, setResponsive] = useState();
  const { data, allData } = useContext(DataContext);
  const [filteredMovie, setFilteredMovie] = useState(0);
  const [moviePage, setMoviePage] = useState(0);

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
            <div className={styles.randomCategory}>{category.title}</div>
            {responsive ? (
              <MobileCarousel
                movies={allData.filter(
                  (item) => item.queryName == category.title
                )}
                filteredMovie={setFilteredMovie}
                moviePage={setMoviePage}
              />
            ) : (
              <NormalCarousel
                
                movies={allData.filter(
                  (item) => item.queryName == category.title
                )}
                filteredMovie={setFilteredMovie}
                moviePage={setMoviePage}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let videosData = [];

  const client = createClient(process.env.NEXT_PUBLIC_PEXELS_URL);

  try {
    await client.videos.popular({ per_page: 24 }).then((videosRaw) => {
      videosData.push(videosRaw);
    });
    // const response = await fetch('https://api.pexels.com/videos/search?query=example&per_page=15', {
    //   headers: {
    //     Authorization: process.env.NEXT_PUBLIC_PEXELS_URL,
    //   },
    // });

    // const { videos } = await response.json();

    return {
      props: {
        // videos,
        videosData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        videos: [],
      },
    };
  }
}
