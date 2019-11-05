import React from "react";
import Box from "./boxs";
import "./statistics.css";

const Statistics = () => {
  const box = [
    {
      icon: "https://www.docplanner.com/img/flag.png",
      h3: "Leader in 10 countries",

      p:
        "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
    },
    {
      icon: "https://www.docplanner.com/img/visits.png",
      h3: "1.5 million appointments",

      p: "booked last month"
    },

    {
      icon: "https://www.docplanner.com/img/patients.png",
      h3: "30 million unique patients",

      p: "visit us every month"
    },
    {
      icon: "https://www.docplanner.com/img/doctors.png",
      h3: "2 million active doctors",

      p: "trust in our solutions"
    }
  ];
  return (
    <section className="statistics">
      <div className="statistics-text">
        <h2>
          The world's <br /> biggest healthcare platform{" "}
        </h2>
        <p>
          We work from 6 offices all over the world, bringing Docplanner <br />{" "}
          Group to life in almost 20 countries.{" "}
        </p>
      </div>
      <div className="boxes">
        <Box arr={box} />
      </div>
    </section>
  );
};

export default Statistics;
