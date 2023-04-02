import React from "react";
import { unsetToken } from "@/lib/auth";

export default function Logout(props) {

    const logout = () => {
        unsetToken();
      };

  return (
    <span>
      <a onClick={logout} style={{ cursor: "pointer" }}>
        {props.logoutPlaceholder}
      </a>
    </span>
  );
}
