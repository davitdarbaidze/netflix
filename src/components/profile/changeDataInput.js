import React, {useState} from "react";
import styles from "../../styles/profile/changeDataInput.module.scss";
import updatePassword from "../../lib/updatePassword";
import checkPasswordMatch from "../../lib/generalFunctions";

export default function ChangeDataInput(props) {
    const [userData, setUserData] = useState({
        current: "",
        password: "",
        repeatPassword: "",

      });
      const handleCHange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
      };

    const handleUpdate = (e) => {
        e.preventDefault();
        if(checkPasswordMatch(userData.password,userData.repeatPassword)){
            updatePassword(userData.current,userData.password,userData.repeatPassword)
            setUserData({current:'',password:'',repeatPassword:''})
        }else{
            console.log('error')
        }
    }
  if (props.inputType === "Change password") {
    return (
      <div>
        <div className={styles.ChangePassword}>
          <label>Current password: </label>
          <input type="password" name="current" onChange={handleCHange} required/>
          <label>New password: </label>
          <input type="password" name="password" onChange={handleCHange} required/>
          <label>Repeat new password: </label>
          <input type="password" name="repeatPassword" onChange={handleCHange} required/>
          <button onClick={handleUpdate}>update</button>
        </div>
      </div>
    );
  }

  if (props.inputType === "Change email") {
    return (
      <div>
        <div>
          <input type="text" name="email" />
          <input type="password" name="password" />
        </div>
      </div>
    );
  }

  if (props.inputType === "Change phone number") {
    return (
      <div>
        <div>
          <input type="text" name="phone" />
          <input type="text" name="password" />
        </div>
      </div>
    );
  }
}
