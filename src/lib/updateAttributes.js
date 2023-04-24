import { getTokenFromLocalCookie } from "./auth";

export const updateUserAttributes = async (idValue ,attributeKey, attributeValue, whichAttributeToUpdateFunction) => {
    const graphql = JSON.stringify({
      query: whichAttributeToUpdateFunction.loc.source.body,
      variables: {
        id: idValue,
        [attributeKey]: attributeValue,
      },
    });
  
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getTokenFromLocalCookie()}`,
      },
      body: graphql,
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      // console.log(errorData);
      return errorData;
    }
  

    const responseData = await response.json();
    return responseData;
  };
  