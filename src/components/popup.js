import styles from "../styles/popup.module.scss"


const PopupMessage = ({ message, onClose }) => {

  return (
      <div className={styles.Overlay} onClick={onClose}>
        <div className={styles.Popup} onClick={(e) => e.stopPropagation()}>
          <p>{message}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default PopupMessage;