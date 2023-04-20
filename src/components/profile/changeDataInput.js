import React, {useState} from "react";
import styles from "../../styles/profile/changeDataInput.module.scss";
import updatePassword from "../../lib/updatePassword";
import checkPasswordMatch from "../../lib/generalFunctions";
import { 
  UPDATE_USER_EMAIL, 
  UPDATE_USER_PHONE,
  UPDATE_USER_CARD,
  UPDATE_USER_SECONDARY_CARD
 } from "../../graphql/mutations";
import { getIdFromLocalCookie } from "@/lib/auth";
import { updateUserAttributes } from "@/lib/updateAttributes";


export default function ChangeDataInput(props) {
    const [userData, setUserData] = useState({
        id: getIdFromLocalCookie(),
        current: "",
        password: "",
        repeatPassword: "",
        email:"",
        phone:"",
        cardNumber: "",
        cardName: "",
        cardExpire: "",
        cardCVC: "",
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

    const handleAttributeUpdate = async (e, attributeToUpdate) => {
      e.preventDefault()      

      if(attributeToUpdate === 'email'){
        updateUserAttributes(userData.id, 'email', userData.email, UPDATE_USER_EMAIL)
      }
      else if(attributeToUpdate === 'phone'){
        updateUserAttributes(userData.id, 'phone', userData.phone, UPDATE_USER_PHONE)
      }
      else if (attributeToUpdate === 'primary'){
        updateUserAttributes(userData.id, 'primary', {primary: 
          {
            number: userData.cardNumber, 
            name: userData.cardName,
            expiry: userData.cardExpire,
            cvc: userData.cardCVC
          }}, UPDATE_USER_CARD)
      }
      else if (attributeToUpdate === 'secondary'){
        await updateUserAttributes(userData.id, 'secondary', {secondary: 
          {
            number: userData.cardNumber, 
            name: userData.cardName, 
            expiry: userData.cardExpire,
            cvc: userData.cardCVC
          }}, UPDATE_USER_SECONDARY_CARD)
      }      
    };
    

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
        <div className={styles.ChangePassword}>
          <label>Enter your email: </label>
          <input type="text" name="email" onChange={handleCHange} />          
          <button onClick={(e) => handleAttributeUpdate(e, 'email')}>update</button>
        </div>
      </div>
    );
  }

  if (props.inputType === "Change phone number") {
    return (
      <div>
        <div className={styles.ChangePassword}>
          <label>Enter new phone number: </label>
          <input type="text" name="phone" onChange={handleCHange} />          
          <button onClick={(e) => handleAttributeUpdate(e, 'phone')}>update</button>
        </div>
      </div>
    );
  }

  if (props.inputType === "Manage payment info") {
    return (
      <div>
        <div className={styles.ChangePassword}>
          <label>Enter card number: </label>
          <input type="text" name="cardNumber" onChange={handleCHange} />
          <label>Enter name on Card: </label>
          <input type="text" name="cardName" onChange={handleCHange} />
          <label>Enter card expire date: </label>
          <input type="text" name="cardExpire" onChange={handleCHange} />
          <label>Enter card CVC: </label>
          <input type="password" name="cardCVC" onChange={handleCHange} />  
          <button onClick={(e) => handleAttributeUpdate(e, 'primary')}>update</button>
        </div>
      </div>
    );
  }

  if (props.inputType === "Add backup payment method") {
    return (
      <div>
        <div className={styles.ChangePassword}>
          <label>Enter backup card number: </label>
          <input type="text" name="cardNumber" onChange={handleCHange} />
          <label>Enter name on backup Card: </label>
          <input type="text" name="cardName" onChange={handleCHange} />
          <label>Enter backup card expire date: </label>
          <input type="text" name="cardExpire" onChange={handleCHange} />
          <label>Enter backup card CVC: </label>
          <input type="password" name="cardCVC" onChange={handleCHange} />  
          <button onClick={(e) => handleAttributeUpdate(e, 'secondary')}>update</button>
        </div>
      </div>
    );
  }

}
