import React, {useState} from "react";
import styles from "../../styles/profile/changeDataInput.module.scss";
import updatePassword from "../../lib/updatePassword";
import checkPasswordMatch from "../../lib/generalFunctions";
import { 
  UPDATE_USER_EMAIL, 
  UPDATE_USER_PHONE,
  UPDATE_USER_PLAN,
  UPDATE_USER_BILLING_DAY,
  UPDATE_USER_STATUS,
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
        plan: "",
        billdingDay: "",
      });
      const handleCHange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
      };
      const [graphqlResponse, setGraphqlResponse] = useState(null)

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
        return updateUserAttributes(userData.id, 'email', userData.email, UPDATE_USER_EMAIL)
      }
      else if(attributeToUpdate === 'phone'){
        const response = await updateUserAttributes(userData.id, 'phone', userData.phone, UPDATE_USER_PHONE)
        if(response.data){
          setGraphqlResponse(true)
        }else if(response.errors){
          setGraphqlResponse(false)
        }
        return true
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
          
      }else if (attributeToUpdate === 'plan'){
        await updateUserAttributes(userData.id, 'plan', userData.plan, UPDATE_USER_PLAN)  
      }else if (attributeToUpdate === 'billingDay'){
        await updateUserAttributes(userData.id, 'billingDay', userData.billdingDay, UPDATE_USER_BILLING_DAY)          
      }else if (attributeToUpdate === 'cancelMembership'){
        await updateUserAttributes(props.data.id, 'status', props.data.status, UPDATE_USER_STATUS)          
      }
      
      return false
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
          {graphqlResponse && handleAttributeUpdate ? <p>Success</p> : <p>Fail</p>}
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

  if (props.inputType === "Change plan") {
    return (
      <div>
        <div className={styles.ChangePassword}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <input className={styles.input} type="radio" name="plan" value="Basic" onChange={handleCHange}/>
            <span className={styles.check}></span>
            <label className={styles.label}>
              <div className={styles.title}>BASIC</div>
              <div className={styles.price}>
                <span className={styles.span}>$</span>
                7
                <span className={styles.span}>/month</span>
              </div>
            </label>
          </div>
          <div className={styles.card}>
            <input className={styles.input} type="radio" name="plan" value="Standard" onChange={handleCHange}/>
            <span className={styles.check}></span>
            <label className={styles.label}>
              <div className={styles.title}>STANDARD</div>
              <div className={styles.price}>
                <span className={styles.span}>$</span>
                10
                <span className={styles.span}>/month</span>
              </div>
            </label>
          </div>
          <div className={styles.card}>
            <input className={styles.input} type="radio" name="plan" value="Premium" onChange={handleCHange}/>
            <span className={styles.check}></span>
            <label className={styles.label}>
              <div className={styles.title}>PREMIUM</div>
              <div className={styles.price}>
                <span className={styles.span}>$</span>
                15
                <span className={styles.span}>/month</span>
              </div>
            </label>
          </div>
        </div>
        <button onClick={(e) => handleAttributeUpdate(e, 'plan')}>update</button>
        </div>
        
      </div>
    );
  }

  if (props.inputType === "Billing details") {
    return (
      <div>
        <div className={styles.ChangePassword}>
          <div className={styles.PlanContainer}>
          <span>Plan</span>
          <h3>{props.data}</h3>
          <span>Next billing date</span>
          <h3>{new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })}</h3>
          </div>
        </div>
      </div>
    );
  }

  if (props.inputType === "Change billing day") {
    return (
      <div>
        <div className={styles.ChangePassword}>
          <label>Currenly you are billed every month on <label>{props.data}</label></label>
          <label>Select month of the day you wish to be billed on Range 1-30:</label>
          <input type="text" name="billdingDay" onChange={handleCHange} />
          <button onClick={(e) => handleAttributeUpdate(e, 'billingDay')}>update</button>
        </div>
      </div>
    );
  }

  if (props.inputType === "cancel membership") {
    return (
      <div>
        
          
          <button onClick={(e) => handleAttributeUpdate(e, 'cancelMembership')}>Yes</button>
        
      </div>
    );
  }
  

}
