import React from "react";
import Card from "./card";
import "./countrycard.css";

const ContryCards = () => {
  const arr = [
    { title: "Warsaw", img: "https://www.docplanner.com/images/warsaw.png" },
    {
      title: "Barcelona",
      img: "https://www.docplanner.com/images/barcelona.png"
    },
    {
      title: "Istanbul",
      img: "https://www.docplanner.com/images/istanbul.png"
    },
    { title: "Rome", img: "https://www.docplanner.com/images/rome.png" },
    {
      title: "Mexico City",
      img: "https://www.docplanner.com/images/mexico-city.png"
    },
    { title: "Curtiba", img: "https://www.docplanner.com/images/curitiba.png" }
  ];
  return (
    <React.Fragment>
      <section class="more-info-stuff">
        <span>Improve the lives of millions. Change yours forever</span>
        <p>
          More than 1000 team mates share our same vision, goals and passion.
          With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and
          Curitiba, our search for great talent never stops.{" "}
        </p>
      </section>
      <section class="contry-photo-part">
        <Card arr={arr} />
      </section>
    </React.Fragment>
  );
};

export default ContryCards;
