import ChangeDataInput from "./changeDataInput";
import styles from "../../styles/profile.module.scss";
import Image from "next/image";


export const ButtonWithArrow = ({ buttonText, toggleModify, handleClick }) => {
    console.log("rendered");
  
    return (
      <div style={{ textDecoration: "none" }}>
        <div className={styles.buttonContainer} onClick={() => handleClick(buttonText)}>
          <button>{buttonText}</button>
          {toggleModify.includes(buttonText) ? (
            <Image loading="eager" height={25} width={25} src={"/chevronDown.svg"} alt="down arrow icon" />
          ) : (
            <Image loading="eager" height={25} width={25} src={"/chevronForward.svg"} alt="arrow icon" />
          )}
        </div>
        {toggleModify.includes(buttonText) ? <ChangeDataInput inputType={buttonText} /> : ""}
      </div>
    );
  };