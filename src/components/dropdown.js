import { useState, useEffect } from "react";
import styles from "../styles/dropdown.module.scss";
import Link from "next/link";
import Divider from "./divider";
import { useFetchUser } from "@/lib/authContext";

function DropdownMenu({ showMainMenu }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [jsonData, setJsonData] = useState([]);
  const { user, userLoading } = useFetchUser();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/categories.json");
      const data = await response.json();
      for (let i = 0; i < 18; i++) {
        setJsonData((prevItem) => [
          ...prevItem,
          data.search_engines[Math.floor(Math.random() * 217)],
        ]);
      }
    }

    fetchData();
  }, []);

  const browseMenu = () => {
    return (
      <div className={styles.browseDropDownMenu}>
        {user ? (
          <div className={styles.navItems}>
            <button
              className={styles.browseDropDownToggle}
              onMouseEnter={toggleMenu}
            >
              Browse
            </button>
            <Link href="/browse/series">TV Shows</Link>
            <Link href="/browse/movies">Movies</Link>
            <Link href="/browse/newandpopular">New and Popular</Link>
            <Link href="/browse/mylist">My List</Link>
            <Link href="/browse/bylanguage">Browse by Language</Link>
          </div>
        ) : (
          <button
            className={styles.browseDropDownToggle}
            onMouseEnter={toggleMenu}
          >
            Browse
          </button>
        )}
        {isMenuOpen && (
          <div
            className={styles.browseDropDownMenuContent}
            onMouseLeave={toggleMenu}
          >
            <div className={styles.browseDropDownMenuContentUser}>
              <Link href="/home">Home</Link>
              <Link href="/mylist">My List</Link>
            </div>
            <Divider className={styles.divider}></Divider>
            <div className={styles.browseDropDownMenuContentCategories}>
              {jsonData.map((category, index) => (
                <div key={index}>
                  <Link href={`browse/${category.name.toLowerCase()}`}>
                    {category.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const mainMenu = () => {
    return (
      <div className={styles.dropDownMenu}>
        <button className={styles.dropDownToggle} onClick={toggleMenu}>
          Browse
        </button>
        {isMenuOpen && (
          <div className={styles.dropDownMenuContent}>
            <ul>
              <li>
                <Link href="/browse">Browse All</Link>
              </li>
              {jsonData.slice(0, 6).map((category, index) => (
                <li key={index}>
                  <Link href={`browse/${category.name.toLowerCase()}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return <div>{showMainMenu ? browseMenu() : mainMenu()}</div>;
}

export default DropdownMenu;
