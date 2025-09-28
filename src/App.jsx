import React, { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ReactLenis from "lenis/react";
import { useProgress } from "@react-three/drei";

// Lazily import the sections that are below the fold.
// This means their code won't be downloaded until they are needed.
const ServiceSummary = lazy(() => import("./sections/ServiceSummary"));
const Services = lazy(() => import("./sections/Services"));
const About = lazy(() => import("./sections/About"));
const Works = lazy(() => import("./sections/Works"));
const ContactSummary = lazy(() => import("./sections/ContactSummary"));
const Contact = lazy(() => import("./sections/Contact"));

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      // A small delay to prevent a jarring transition
      setTimeout(() => setIsReady(true), 500);
    }
  }, [progress]);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {/* Loading Screen Overlay */}
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity select-none duration-1000`}
      >
        <Navbar />
        <Hero />
        
        {/*
          The Suspense component shows a fallback UI (like a simple "Loading...")
          while it waits for the lazy-loaded components to be downloaded and rendered.
        */}
        <Suspense fallback={<div className="h-screen bg-black" />}>
          <ServiceSummary />
          <Services />
          <About />
          <Works />
          <ContactSummary />
          <Contact />
        </Suspense>
      </div>
    </ReactLenis>
  );
};

export default App;