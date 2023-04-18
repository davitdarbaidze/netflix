

export const checkPasswordMatch = (current, newPassword) => {
    if (current === newPassword) {
      return true;
    }
    return false;
  
  };
  
  export default checkPasswordMatch;

  const handleEmailUpdate = async (e , idOfUser, attributeToUpdate) => {
    
    e.preventDefault();

    try {
      const response = await updateUserEmail({
        variables: { id: 2,  email: userData.email},
      });
      
      console.log(response.data.updateUsersPermissionsUser.user);
    } catch (err) {
      console.error(err);
    }
  };


// export async function updateUserAttribute(e, idKey, idValue, attributeKey, attributeValue) {
//     try {
//       const variables = {
//         [idKey]: idValue,
//         [attributeKey]: attributeValue,
//       };
//       await updateUserAttribute({ variables });
//       console.log(response.data.updateUsersPermissionsUser.user);
//     } catch (err) {
//       console.error(err);
//     }
//   }
export const updateUserAttribute = async (idValue ,attributeKey, attributeValue, whichAttributeToUpdateFunction) => {
  try {
    const response = await whichAttributeToUpdateFunction({
      variables: {
        id: idValue,
        [attributeKey]: attributeValue,
      },
    });
    console.log(response.data.updateUsersPermissionsUser.user);
  } catch (err) {
    console.error(err);
  }
};