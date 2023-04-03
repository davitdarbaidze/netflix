import { useState, useEffect } from "react";
import styles from "../styles/dropdown.module.scss";
import Link from "next/link";
import Divider from "./divider";

function DropdownMenu({ showMainMenu }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [jsonData, setJsonData] = useState([]);

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
        <button
          className={styles.browseDropDownToggle}
          onMouseEnter={toggleMenu}
        >
          Browse
        </button>
        {isMenuOpen && (
          <div
            className={styles.browseDropDownMenuContent}
            onMouseLeave={toggleMenu}
          >
            <div className={styles.browseDropDownMenuContentUser}>
              <Link href="home">Home</Link>
              <Link href="list">My List</Link>
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
              {jsonData.slice(0,6).map((category, index) => (
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

  // console.log(jsonData[0].name)

  return <div>{showMainMenu ? browseMenu() : mainMenu()}</div>;
}

export default DropdownMenu;
