import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const LoginButton: React.FC = () => {
  const handleSuccess = (response: any) => {
    console.log("Login Successful:", response);
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        text="signin_with"
        shape="circle"
      />
    </div>
  );
};

export default LoginButton;
