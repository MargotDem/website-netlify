import React from "react";

const Presentation = () => {
  return (
    <div className="presentation-container">
      <section className="home-section">
        <div className="home-section-top">
          <h2>Aller à l’essentiel n’a jamais été aussi simple</h2>
          <p>Nua.ge vous permet de créer vos VM en un éclair ⚡️</p>
          <p>Il vous suffit juste de choisir :</p>
        </div>

        <div className="presentation-image"></div>

        <div className="home-section-bottom">
          <p>C’est tout. Validez votre instance et c’est à vous de jouer.</p>
          <div className="home-section-bottom-buttons">
            <button className="button purple-button">Créer une VM</button>
            <button className="button transparent-button transparent-purple-button">Discutez avec l’équipe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
