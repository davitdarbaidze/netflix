import Cookies from 'js-cookie';

function getTimeSinceLogin() {
  const nowCookie = Cookies.get('time_now'); // Get the value of the "now" cookie
  if (nowCookie) {
    const now = new Date(); // Current date and time
    const loginTime = new Date(nowCookie); // Convert the value of the "now" cookie to a Date object
    const timeDiff = now - loginTime; // Calculate the time difference in milliseconds
    const minutesDiff = Math.floor(timeDiff / (1000 * 60)); // Calculate the number of minutes that have passed since login
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60)); // Calculate the number of hours that have passed since login
    return { minutes: minutesDiff, hours: hoursDiff }; // Return an object with the number of minutes and hours that have passed since login
  } else {
    return null; // Return null if the "now" cookie does not exist
  }
}

export default getTimeSinceLogin;