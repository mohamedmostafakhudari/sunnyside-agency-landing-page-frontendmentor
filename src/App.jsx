import { useState } from "react";
import GallerySection from "./components/GallerySection";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Hero>
        <Nav />
      </Hero>
      <main>
        <ServicesSection />
        <TestimonialSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}

export default App;
