/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React from "react";
// import Blob from "./blob";
import ContactForm from "./contactForm";

const HomePage = () => {
  return (
    <>
      <img src="/illustrations/blob-1.svg" alt="" className="Blob-1" />
      <img src="/illustrations/blob-2.svg" alt="" className="Blob-2" />
      <section className="section home-page">
        <div className="container has-text-centered">
          <div className="home-logo">
            <img src="/illustrations/nua.svg" alt="" className="logo-nua" />
            {/* <Blob /> */}
            <img
              src="/illustrations/icotype-fond-bleu.svg"
              alt=""
              className="static-logo"
            />
            <img src="/illustrations/ge.svg" alt="" className="logo-ge" />
          </div>

          <div className="columns is-centered">
            <div className="column is-8-desktop is-10-tablet home-title">
              <h1 className="is-h1">
                Le Cloud Public <br /> dans son plus simple appareil
              </h1>
            </div>
          </div>

          <div className="columns is-centered">
            <div className="column is-6-desktop is-8-tablet home-description">
              <div className="is-h4">
                Nua.ge est une offre cloud épurée de type IaaS, pensée pour des
                utilisateurs exigeants et pragmatiques pour qui la complexité
                n’est pas synonyme de performances.
              </div>
            </div>
          </div>

          <div className="columns is-centered">
            <div className="column home-experience">
              <p>Vivez l’expérience Nua.ge</p>
            </div>
          </div>

          <ContactForm />

          <div className="columns is-centered">
            <div className="column is-10-tablet is-12-mobile home-beta">
              <p>Notre solution est actuellement en beta test.</p>
              <p>
                Recevez une invitation et faites partie de nos premiers
                utilisateurs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
