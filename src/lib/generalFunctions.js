import { getTokenFromLocalCookie } from "./auth";

export const checkPasswordMatch = (current, newPassword) => {
    if (current === newPassword) {
      return true;
    }
    return false;
  
  };
  
  export default checkPasswordMatch;



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
// export const updateUserAttribute = async (idValue ,attributeKey, attributeValue, whichAttributeToUpdateFunction) => {
  
//   const headers = {
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjgxOTk5ODc1LCJleHAiOjE2ODQ1OTE4NzV9.Dl5_IGjEvuym9MMkwVBRmTpA6Wo1vs-X4UPq5qE_8_8"
//   }; 
  
//   try {
//     //Graphql mutation comes from the component where is this function called
//     //so the mutation has to be imported in that componenet
//     const response = await whichAttributeToUpdateFunction({
//       headers: headers,
//       variables: {
//         id: idValue,
//         [attributeKey]: attributeValue,
//       },
      
//     });
//     console.log(response.data);
//   } catch (err) {
//     console.error(err);
//   }
// };