import React, { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";

const LoginButton: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("isLoggedIn state updated:", isLoggedIn);
  }, [isLoggedIn]);

  const handleSuccess = (response: any) => {
    const token = response.credential;
    console.log("Token:", token);
    localStorage.setItem("google_token", token);
    setIsLoggedIn(true);
    console.log("Giriş yapıldı");
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  const handleLogout = () => {
    localStorage.removeItem("google_token");
    setIsLoggedIn(false);
    console.log("Çıkış yapıldı");
  };

  return (
    <div>
      {!isLoggedIn ? (
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          useOneTap
          theme="outline"
          shape="rectangular"
          text="signin_with"
        />
      ) : (
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Çıkış Yap
        </button>
      )}
    </div>
  );
};

export default LoginButton;
