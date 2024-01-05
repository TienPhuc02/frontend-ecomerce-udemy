import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import HomePage from "@/layout/Home";
import StoreProvider from "@/lib/storeProvider";
import React from "react";
const Home = () => {
  return (
    <StoreProvider>
      <Header/>
      <HomePage />
      <Footer/>
    </StoreProvider>
  );
};

export default Home;
