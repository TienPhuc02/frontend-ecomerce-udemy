import HomePage from "@/layout/Home";
import StoreProvider from "@/lib/storeProvider";
import React from "react";
const Home = () => {
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  );
};

export default Home;
