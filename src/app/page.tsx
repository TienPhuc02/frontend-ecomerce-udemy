"use client";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import HomePage from "@/layout/Home";
import StoreProvider from "@/lib/storeProvider";
import React, { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    
  }, []);
  return (
    <StoreProvider>
      <Header />
      <HomePage />
      <Footer />
    </StoreProvider>
  );
};

export default Home;
