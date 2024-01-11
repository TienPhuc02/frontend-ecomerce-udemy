import React from "react";
import LoginPage from "@/pages/Login";
import StoreProvider from "@/lib/storeProvider";
const Login = () => {
  return (
    <StoreProvider>
      <LoginPage />
    </StoreProvider>
  );
};

export default Login;
