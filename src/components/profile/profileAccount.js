import React, {useState, useEffect} from "react";
import SiteHeader from "@/components/SiteHeader";
import styles from "../../styles/profile.module.scss";
import { getEmailFromLocalCookie } from "@/lib/auth";
import Divider from "@/components/divider";
import Link from "next/link";
import ReEnterUserPass from "./reEnterUserPass";
import useGetTimeSinceLogin from "../../hooks/useGetTimeSinceLogin"
import { ButtonWithArrow } from "./buttonWithArros";
import { getTokenFromLocalCookie } from "@/lib/auth";
import { fetchData } from "@/lib/generalFunctions";
import ChangeDataInput from "./changeDataInput";





export default function ProfileAccount() {
  const email = getEmailFromLocalCookie();
  const [toggle, setToggle] = useState(false);
  const [toggleModify, setToggleModify] = useState([]);
  const timeSinceLogin = useGetTimeSinceLogin()
  const [data, setData] = useState(null);
  const [showOverlay, setShowOverlay] = useState(true);

  console.log(data)
  useEffect(() => {
    async function outerFetchData() {
      const url = `${process.env.NEXT_PUBLIC_API_URL}api/users/me`;
      const token = getTokenFromLocalCookie();
      const responseData = await fetchData(url, token);
      setData(responseData);
    }
    outerFetchData();
  }, []);
  

  const handleDataModifyClick = (buttonText) => {
    if (toggleModify.includes(buttonText.target.innerText)) {
      setToggleModify(toggleModify.filter((btnText) => btnText !== buttonText.target.innerText));
    } else {
      setToggleModify([...toggleModify, buttonText.target.innerText]);
    }
  };


  //function which toggles password reentry window if case it's been more than 5 minute
  //since user logged in, otherwise it calls data modify function
  function handleClick(e) {
    if(timeSinceLogin.minutes > 5){
      
      setToggle(!toggle);
    }else{
      handleDataModifyClick(e);
    } 
  }

  console.log(data)

  return (
    <div>
      
      {data && data.status ? (
        <div>
          <SiteHeader />
          
          {toggle ? <ReEnterUserPass toggleValue={toggle} toggle={setToggle}/> : ''}
          
          <div className={styles.ProfileContainer}>
          
            
            <h3 >Account</h3>
            
            <p>Member since {data.createdAt}</p>
            
            <div className={styles.Account}>
              <div>
                <p>Membership & Billing</p>
                <ul>
                  <li style={{ fontWeight: "bold", color: "black" }}>
                    {email}
                  </li>
                  <li>Password: ********</li>
                  <li>Phone number: {data.phone}</li>
                </ul>
                <div className={styles.ChangeButtons}>
                <div style={{textDecoration:'none'}} >
                  </div>
                  <ButtonWithArrow toggleModify={toggleModify} href="/modify/account/data" buttonText="Change email" handleTimerCheck={(e) => handleClick(e)} handleClick={() => handleDataModifyClick("Change email")}/>
                  <ButtonWithArrow toggleModify={toggleModify} href="/modify/account/data" buttonText="Change password" handleTimerCheck={(e) => handleClick(e)} handleClick={() => handleDataModifyClick("Change password")}/>
                  <ButtonWithArrow toggleModify={toggleModify} href="/modify/account/data" buttonText="Change phone number" handleTimerCheck={(e) => handleClick(e)} handleClick={() => handleDataModifyClick("Change phone number")}/>
                </div>
                <Divider className={styles.divider}></Divider>
                <div className={styles.Billing}>
                  <div style={{ padding: "0 1rem 0 1rem", fontWeight: "bold" }}>
                    **** **** **** {data.primary.primary.number.slice(12, 16)}
                  </div>
                  <ul style={{marginBottom:'0rem'}}>
                    <div style={{ border: "0" , paddingBottom:'1rem'}}>
                      Your next billing date is:{" "}
                      {new Date().toLocaleDateString("en-US")}
                    </div>
                    <ButtonWithArrow toggleModify={toggleModify} href="/modify/account/payment" buttonText="Manage payment info" handleTimerCheck={(e) => handleClick(e)} handleClick={() => handleDataModifyClick("Manage payment info")}/>
                    <ButtonWithArrow toggleModify={toggleModify} href="/modify/account/payment" buttonText="Add backup payment method" handleTimerCheck={(e) => handleClick(e)} handleClick={() => handleDataModifyClick("Add backup payment method")}/>
                    <ButtonWithArrow toggleModify={toggleModify} href="/modify/account/payment" buttonText="Billing details" handleTimerCheck={(e) => handleClick(e)} handleClick={() => handleDataModifyClick("Billing details")} data={data.plan}/>
                    <ButtonWithArrow toggleModify={toggleModify} href="/modify/account/payment" buttonText="Change billing day" handleTimerCheck={(e) => handleClick(e)} handleClick={() => handleDataModifyClick("Change billing day")} data={data.billingDay}/>
                  </ul>
                </div>
                <Divider className={styles.divider}></Divider>
                <div className={styles.Cancel} style={{textDecoration:'none'}}>
                  {showOverlay ? 
                    <div></div> : 
                    <div className={styles.CancelMembershipCover}>
                      <h1>Are you sure you want to cancel membership?</h1>
                      <ChangeDataInput data={{id:data.id, status: false}}inputType={'cancel membership'} />
                      <br></br>
                      <button onClick={() => setShowOverlay(!showOverlay)}>cancel</button>
                    </div>}
                  <button className={styles.CancelMembership} onClick={() => setShowOverlay(!showOverlay)}>
                    Cancel Membership
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.PlanContainer}>
            <div className={styles.Plan}>
              <p>Plan Details</p>
              <div>{data.plan}</div>
              <ButtonWithArrow toggleModify={toggleModify} href="/modify/account/plan" buttonText="Change plan" handleTimerCheck={(e) => handleClick(e)} handleClick={() => handleDataModifyClick("Change plan")}/>
            </div>
          </div>
        </div>
      ) : data && data.error ? (
        <p>Please login</p>    
      ) : (
        <p>Your membership is cancel please renew</p>
    
      )}
    </div>
  );
}
