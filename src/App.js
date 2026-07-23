import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Methodology from "./components/Methodology";
import Courses from "./components/Courses";
import PresencialDetails from "./components/PresencialDetails";
import VIPOnlineDetails from "./components/VIPOnlineDetails";
import Testimonials from "./components/Testimonials";
import Structure from "./components/Structure";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Methodology />
      <Courses />
      <PresencialDetails />
      <VIPOnlineDetails />
      <Testimonials />
      <Structure />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
