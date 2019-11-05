import React from "react";
import "./services.css";

const Service = props => {
  return (
    <React.Fragment>
      {props.arr.map(e => (
        <div
          className="for-patient-doctor"
          style={{
            backgroundColor: e.forDoctor === true ? "#3d83df" : "#00ccb1"
          }}
        >
          <div>
            <h2>{e.title}</h2>
            <p>{e.p}</p>
          </div>

          {e.forDoctor === false ? (
            <select className="select-country">
              <option>Choose country</option>
              <option value="http://www.doctoraliar.com">Argentina</option>
              <option value="http://www.doctoralia.com.au">Australia</option>
              <option value="http://www.doctoralia.com.br">Brazil</option>
              <option value="http://www.doctoralia.cl">Chile</option>
              <option value="http://www.doctoralia.co">Colombia</option>
              <option value="http://www.znamylekar.cz">Czech</option>
              <option value="http://www.doctoralia-fr.com">France</option>
              <option value="http://www.miodottore.it">Italy</option>
              <option value="http://www.doctoralia.com.mx">Mexico</option>
              <option value="http://www.doctoralia.pe">Peru</option>
              <option value="http://www.znanylekarz.pl">Poland</option>
              <option value="http://www.doctoralia.com.pt">Portugal</option>
              <option value="http://www.doctoralia.es">Spain</option>
              <option value="http://www.doktortakvimi.com">Turkey</option>
              <option value="http://www.doctoralia.co.uk">UK</option>
            </select>
          ) : null}

          <img src={e.img} className="comp-img" />
        </div>
      ))}
    </React.Fragment>
  );
};

export default Service;
