import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowITWorks from "./components/HowITWorks";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import AppLoader from "./components/AppLoader"; // Your loader component

import * as Sentry from '@sentry/react';
import { useState, useEffect } from "react";
import { preloadAssets } from "./utils/index"; // Adjusted import

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // To track loading status

  useEffect(() => {
    preloadAssets()
      .then(() => {
        console.log('All assets loaded');
        setIsLoading(false); // Once everything is loaded
      })
      .catch((error) => {
        console.error("Error loading assets:", error);
        setIsLoading(false); // Even on error, render the content
      });
  }, []);

  if (isLoading) {
    return <AppLoader />; // Show loader while loading
  }

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowITWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
