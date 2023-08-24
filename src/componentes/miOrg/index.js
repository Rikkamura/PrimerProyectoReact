import { useState } from "react";
import "./miOrg.css";

const MiOrg = (props) => {
  return (
    <section className="orgSection">
      <h3 className="title">Mi Organizacion</h3>
      <img
        src="/img/add.png"
        alt="añadir colaborador"
        onClick={props.cambiarMostrar}
      />
    </section>
  );
};

export default MiOrg;
