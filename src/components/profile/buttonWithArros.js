import ChangeDataInput from "./changeDataInput";
import styles from "../../styles/profile.module.scss";
import Image from "next/image";


export const ButtonWithArrow = ({ buttonText, toggleModify, handleClick, handleTimerCheck, data }) => {
  
    return (
      <div style={{ textDecoration: "none" }}>
        <div className={styles.buttonContainer} onClick={(() => handleClick(buttonText), handleTimerCheck)}>
          <button>{buttonText}</button>
          {toggleModify.includes(buttonText) ? (
            <Image loading="eager" height={25} width={25} src={"/chevronDown.svg"} alt="down arrow icon" />
          ) : (
            <Image loading="eager" height={25} width={25} src={"/chevronForward.svg"} alt="arrow icon" />
          )}
        </div>
        {toggleModify.includes(buttonText) ? <ChangeDataInput data={data} inputType={buttonText} /> : ""}
      </div>
    );
  };