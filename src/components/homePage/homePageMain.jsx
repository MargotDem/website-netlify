import React from "react";

const HomePageMain = () => (
  <section className="section">
    <div className="container has-text-centered">
      <div className="columns">
        <div className="column is-12 is-10-desktop is-offset-1-desktop home-title">
          <h1>Le Cloud Computing dans son plus simple appareil</h1>
        </div>
      </div>

      <div className="columns">
        <div className="column is-12-mobile is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet home-description">
          <h2>
            Nua.ge est une offre cloud épurée de type IaaS, pensée pour des
            utilisateurs exigeants et pragmatiques pour qui la complexité n’est
            pas synonyme de performances.
          </h2>
        </div>
      </div>

      <div className="columns">
        <div className="column is-one-third-tablet is-offset-4-tablet is-half-mobile is-offset-3-mobile home-contact">
          <input
            className="input home-contact-input"
            type="text"
            placeholder="Entrez votre email"
          />
          <button className="button home-contact-button">
            Vivez l’expérience Nua.ge
          </button>
        </div>
      </div>

      <div className="columns">
        <div className="column is-12-mobile is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet home-beta">
          <p>
            Notre solution est actuellement en beta test. Vous souhaitez
            recevoir une invitation ? Faites partie de notre communauté de
            testeurs.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HomePageMain;
