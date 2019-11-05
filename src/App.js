import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Intro from "./components/intro";
import Service from "./components/services";
import Brands from "./components/brands";
import Statistics from "./components/statistics";
import CountryCards from "./components/contrycard";
import Footer1 from "./components/footer";

function App() {
  const nav = [
    { title: "About us" },
    { title: "Career" },
    {
      title: "departements",
      dropdown: [
        "Marketing & PR",
        "Customer Success & Sales",
        "IT, Product, Design & UX",
        "Finance & Administration",
        "HR & more"
      ]
    }
  ];
  const serv = [
    {
      title: "for patients",
      p: "Find a doctor, book a visit and solve any health-related doubt",
      img: "https://www.docplanner.com/img/screen-marketplace@2x.png",
      forDoctor: false
    },

    {
      title: "For doctors",
      p: "Save time managing visits and cut no-shows by half",
      img: "https://www.docplanner.com/img/screen-saas@2x.png",
      forDoctor: true
    }
  ];
  return (
    <div className="App">
      <NavBar nav={nav} />
      <Intro />
      <div className="for-patient-for-doctor">
        <Service arr={serv} />
      </div>
      <Brands />
      <Statistics />
      <CountryCards />
      <Footer1 />
    </div>
  );
}

export default App;
