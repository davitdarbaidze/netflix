import { getTokenFromLocalCookie } from "./auth";

export const checkPasswordMatch = (current, newPassword) => {
    if (current === newPassword) {
      return true;
    }
    return false;
  
  };
  
  export default checkPasswordMatch;


export async function fetchData(url, token) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  const responseData = await response.json();
  return responseData;
}
 