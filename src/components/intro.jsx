import React from "react";
import "./intro.css";
const Intro = () => {
  return (
    <section className="title-and-intro">
      <img
        className="lead__logo"
        src="https://www.docplanner.com/img/sygnet.png"
        srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x"
      />
      <h1 className="title-part">
        Making the healthcare experience more human
      </h1>
      <div className="intro-part">
        <p>
          We want patients to find the perfect doctor and book an appointment in
          the most easy way. The patient journey should be enjoyable, and that's
          why we are always next to them: to help them find the best possible
          care. Anytime, anywhere.
        </p>
        <p>
          We also help doctors to better manage their practice and build their
          online reputation. With our integrated end-to-end solution, doctors
          are able not only to improve their online presence, but also to devote
          their time to what really matters: their patients.
        </p>
      </div>
    </section>
  );
};

export default Intro;
