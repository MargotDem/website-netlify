import React from "react";
import Slides from "./slides";

const Functionalities = () => {
  return (
    <div className="functionalities-container">
      <section className="home-section">
        <div className="home-section-top">
          <h2>Simple, mais pas simpliste</h2>
          <p>
            Comme nous savons faire la différence entre un produit “épuré” et
            une solution “vide”,
          </p>
          <p>
            nous avons doté Nua.ge de fonctionnalités que nous jugeons
            indispensables.
          </p>
        </div>

        <div className="functionalities-slides column is-10">
          <Slides />
        </div>

        <div className="home-section-bottom">
          <p>Vous n’en attendiez ni plus ni moins ?</p>
          <div className="home-section-bottom-buttons">
            <button className="button purple-button">Testez-nous</button>
            <button className="button transparent-button transparent-purple-button">
              Discutez avec l’équipe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Functionalities;
