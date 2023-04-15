const checkPasswordMatch = (current, newPassword) => {
    if (current === newPassword) {
      return true;
    }
    return false;
  
  };
  
  export default checkPasswordMatch;