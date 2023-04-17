import React, {useState} from "react";
import SiteHeader from "@/components/SiteHeader";
import styles from "../../styles/profile.module.scss";
import { useFetchUser } from "@/lib/authContext";
import { getEmailFromLocalCookie } from "@/lib/auth";
import { getIdFromLocalCookie } from "@/lib/auth";
import Divider from "@/components/divider";
import Image from "next/image";
import Link from "next/link";
import ReEnterUserPass from "../reEnterUserPass";
import { useRouter } from "next/router";
import useGetTimeSinceLogin from "../../hooks/useGetTimeSinceLogin"
import ChangeDataInput from "./changeDataInput";
import { ButtonWithArrow } from "./buttonWithArros";







export default function ProfileAccount() {
  const { user } = useFetchUser();
  const email = getEmailFromLocalCookie();
  const id = getIdFromLocalCookie();
  const [toggle, setToggle] = useState(false);
  const [toggleModify, setToggleModify] = useState([]);
  const timeSinceLogin = useGetTimeSinceLogin()
  const router = useRouter();


  //component for buttons with arrow,since there is multiple buttons with same style
  // const ButtonWithArrow = ({ buttonText, inputName }) => {
  //   console.log('rendered')
  
  //   return (
  //     <div style={{textDecoration:'none'}} >
  //     <div className={styles.buttonContainer} onClick={e => handleClick(e)}>
  //         <button>{buttonText}</button>
  //         {toggleModify.includes(buttonText) ? <Image loading="eager" height={25} width={25} src={'/chevronDown.svg'} alt="down arrow icon"/> : <Image loading="eager" height={25} width={25} src={'/chevronForward.svg'} alt="arrow icon"/>}
  //     </div>
  //     {toggleModify.includes(buttonText) ? <ChangeDataInput inputType={buttonText}/> : ''}
  //     </div>
  //   );
  // };
  // const handleEmailUpdate = (e) => {
  //   const { data, error, loading } = useMutation(UPDATE_USER_EMAIL, {
  //     variables: { id: 2 , data: { email: 'joke@gmail.com' }},
  //   });
  // }


  const handleDataModifyClick = (buttonText) => {
    if (toggleModify.includes(buttonText)) {
      setToggleModify(toggleModify.filter((btnText) => btnText !== buttonText));
    } else {
      setToggleModify([...toggleModify, buttonText]);
    }
  };
  // function for toggling changing email,password etc divs
  // const modify = (e) => {
  //   console.log(e.target)
  //   if(toggleModify.includes(e.target.innerText)){
  //     setToggleModify(toggleModify.filter(item => item !== e.target.innerText))
  //     return
  //   }else{
  //     setToggleModify([...toggleModify, e.target.innerText])
  //   }
  // }

  //function which toggles password reentry window if case it's been more than 5 minute
  //since user logged in, otherwise it calls data modify function
  function handleClick(e) {
    if(timeSinceLogin.minutes > 1){
      
      setToggle(!toggle);
    }else{
      modify(e);
    } 
  }


  return (
    <div>
      
      {user ? (
        <div>
          <SiteHeader />
          
          {toggle ? <ReEnterUserPass toggleValue={toggle} toggle={setToggle}/> : ''}
          <div className={styles.ProfileContainer}>
          
            
            <h3 >Account</h3>
            
            <p>Member since {new Date().toLocaleDateString("en-US")}</p>
            
            <div className={styles.Account}>
              <div>
                <p>Membership & Billing</p>
                <ul>
                  <li style={{ fontWeight: "bold", color: "black" }}>
                    {email}
                  </li>
                  <li>Password: ********</li>
                  <li>Phone number: {id}</li>
                </ul>
                <div className={styles.ChangeButtons}>
                <div style={{textDecoration:'none'}} >
                  {/* <div className={styles.buttonContainer} onClick={e => handleClick(e)}>
                      <button>{'Change email'}</button>
                      {toggleModify.includes('Change email') ? <Image loading="eager" height={25} width={25} src={'/chevronDown.svg'} alt="down arrow icon"/> : <Image loading="eager" height={25} width={25} src={'/chevronForward.svg'} alt="arrow icon"/>}
                  </div>
                  {toggleModify.includes('Change email') ? <ChangeDataInput inputType={'Change email'}/> : ''}
                  </div>
                  <div style={{textDecoration:'none'}} >
                  <div className={styles.buttonContainer} onClick={e => handleClick(e)}>
                      <button>{'Change email'}</button>
                      {toggleModify.includes('Change email') ? <Image loading="eager" height={25} width={25} src={'/chevronDown.svg'} alt="down arrow icon"/> : <Image loading="eager" height={25} width={25} src={'/chevronForward.svg'} alt="arrow icon"/>}
                  </div> */}
                  {/* {toggleModify.includes('Change email') ? <ChangeDataInput inputType={'Change email'}/> : ''} */}
                  </div>
                  <ButtonWithArrow toggleModify={toggleModify} href="/modify/account/data" buttonText="Change email" handleTimerCheck={(e) => handleClick(e)} handleClick={() => handleDataModifyClick("Change email")}/>
                  <ButtonWithArrow toggleModify={toggleModify} href="/modify/account/data" buttonText="Change password" handleTimerCheck={(e) => handleClick(e)} handleClick={() => handleDataModifyClick("Change password")}/>
                  <ButtonWithArrow toggleModify={toggleModify} href="/modify/account/data" buttonText="Change phone number" handleTimerCheck={(e) => handleClick(e)} handleClick={() => handleDataModifyClick("Change phone number")}/>
                </div>
                <Divider className={styles.divider}></Divider>
                <div className={styles.Billing}>
                  <div style={{ padding: "0 1rem 0 1rem", fontWeight: "bold" }}>
                    **** **** **** 0759
                  </div>
                  <ul>
                    <div style={{ border: "0" , paddingBottom:'1rem'}}>
                      Your next billing date is:{" "}
                      {new Date().toLocaleDateString("en-US")}
                    </div>
                    <ButtonWithArrow toggleModify={toggleModify} href="/modify/account/payment" buttonText="Manage payment info" handleTimerCheck={(e) => handleClick(e)} handleClick={() => handleDataModifyClick("Manage payment info")}/>
                    <ButtonWithArrow toggleModify={toggleModify} href="/modify/account/payment" buttonText="Add backup payment method" handleTimerCheck={(e) => handleClick(e)} handleClick={() => handleDataModifyClick("Add backup payment method")}/>
                    <ButtonWithArrow toggleModify={toggleModify} href="/modify/account/payment" buttonText="Billing details" handleTimerCheck={(e) => handleClick(e)} handleClick={() => handleDataModifyClick("Billing details")} />
                    <ButtonWithArrow toggleModify={toggleModify} href="/modify/account/payment" buttonText="Change billing day" handleTimerCheck={(e) => handleClick(e)} handleClick={() => handleDataModifyClick("Change billing day")}/>
                  </ul>
                </div>
                <Divider className={styles.divider}></Divider>
                <div>
                  <ul className={styles.Gifts}>
                    <Link href="/gifts"><button>Redeem gift card or promo code</button></Link>
                    <Link href="/gifts"><button>Where to buy gift cards</button></Link>
                  </ul>
                </div>
                <div className={styles.Cancel} style={{textDecoration:'none'}}>
                  <Link href={'/modify/account/data'}>
                  <button className={styles.CancelMembership}>
                    Cancel Membership
                  </button>
                  </Link>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Please login from home page</p>
      )}
    </div>
  );
}
