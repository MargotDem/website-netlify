import React from "react";

const Fundamentals = () => {
  return (
    <div className="fundamentals-container">
      <section className="home-section">
        <div className="home-section-top">
          <h2>Nua.ge, sans l’ombre du doute</h2>
          <p>
            Parce que nous en avons assez des offres Cloud nébuleuses et que
            Nua.ge n’a rien à cacher,
          </p>
          <p>
            nous souhaitons faire la lumière sur les fondamentaux de notre
            produit.
          </p>
        </div>

        <div className="fundamentals-columns column is-8">
          <div className="fundamentals-column">
            <div className="fundamentals-icon">A</div>
            <h3>Cloud Maestria</h3>
            Nous sommes des nouveaux arrivants, mais nous ne sommes pas des
            bleus pour autant. Nua.ge est une création des équipes d’Oxeva et
            bénéficie d’un savoir-faire d’une quinzaine d’année en matière
            d’hébergement haute disponibilité.
          </div>
          <div className="fundamentals-column is-3">
            <div className="fundamentals-icon">A</div>
            <h3>Cocoricloud </h3>
            Nous sommes domiciliés en France et tous nos datacenters sont situés
            sur le territoire français.
          </div>
          <div className="fundamentals-column is-3">
            <div className="fundamentals-icon">A</div>
            <h3>RGPD</h3>
            Nous avons effectué toutes les mises en conformité et passé tous les
            audits de sécurité possibles et imaginables pour vous garantir un
            Cloud parfaitement RGPD friendly.
          </div>
        </div>

        <div className="home-section-bottom">
          <div className="home-section-bottom-fundamentals">
            <p className="">Convaincu.e ?</p>
            <p>Pas convaincu.e ?</p>
          </div>

          <div className="home-section-bottom-buttons">
            <button className="button purple-button">Testez Nua.ge</button>
            <button className="button transparent-button transparent-purple-button">
              Discutez avec l’équipe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fundamentals;
