import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "../components/AuthContext";

const LoginButton: React.FC = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const token = tokenResponse.access_token;
      if (token) {
        localStorage.setItem("google_access_token", token);
        setIsLoggedIn(true);
        console.log("Login successful, token saved.");
        console.log("Access Token:", token);
      }
    },
    onError: () => {
      console.log("Login failed.");
    },
    scope:
      "https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.force-ssl",
  });

  const handleLogout = () => {
    localStorage.removeItem("google_access_token");
    setIsLoggedIn(false);
    console.log("Logged out.");
  };

  return (
    <div>
      {!isLoggedIn ? (
        <button onClick={() => login()} style={{ padding: "10px 20px" }}>
          Giriş Yap
        </button>
      ) : (
        <button onClick={handleLogout} style={{ padding: "10px 20px" }}>
          Çıkış Yap
        </button>
      )}
    </div>
  );
};

export default LoginButton;
