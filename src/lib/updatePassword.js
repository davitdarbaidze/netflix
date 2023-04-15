import { getTokenFromLocalCookie } from "./auth";
import { setToken } from "./auth";

const updateUserPassword = async (current, newPassword, repeatNewPassword) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/auth/change-password`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getTokenFromLocalCookie()}`,
      },
      body: JSON.stringify({
        currentPassword: current,
        password: newPassword,
        passwordConfirmation: repeatNewPassword,
      }),
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    console.log(errorData);
    return;
  }
  const responseData = await response.json();
  setToken(responseData, true);
};

export default updateUserPassword;
