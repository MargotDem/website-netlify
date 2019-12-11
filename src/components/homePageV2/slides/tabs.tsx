/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React from "react";
import bulmaCollapsible from "@creativebulma/bulma-collapsible";

const TABS = [
  {
    title: "Redimensionnement des instances",
    content:
      "Ajustez les ressources allouées à vos VM sur les évolutions des besoins de vos projets, sans avoir à créer une nouvelle instance."
  },
  {
    title: "Consommation à l’usage",
    content:
      "Stoppez vos VM quand vous n’en avez plus besoin et redémarrez les quand vous en avez de nouveau l’utilité."
  },
  {
    title: "Suivi des consommations",
    content:
      "Visualisez en temps réel les ressources consommées par instance et par projet."
  },
  {
    title: "Estimation des facturations",
    content:
      "Anticipez vos dépenses avec une estimation des coûts mise à jour en temps réel d’après votre consommation de ressources."
  },
  {
    title: "Gestion des équipes",
    content:
      "Invitez vos collaborateurs sur la plateforme et allouez-leur des droits selon leur profil."
  },
  {
    title: "Édition de reportings",
    content:
      "Vous pouvez également éditer des reportings clairs et compréhensibles par le commun des mortels."
  }
];

interface CollapsiblesProps {
  changeTab: (tab: number) => void;
  activeTab: number;
}

class Collapsibles extends React.Component<CollapsiblesProps, {}> {
  componentDidMount() {
    this.collapsibles = bulmaCollapsible.attach(".is-collapsible", {
      container: this.refs.collapsibles
    });
  }

  render() {
    let { changeTab, activeTab } = this.props;
    return (
      <div className="column is-4 functionalities-tabs">
        <div ref="collapsibles" id="accordion_first">
          {TABS.map((tab, i: number) => {
            return (
              <article
                className={
                  "message " + (activeTab === i ? "is-active-message" : "")
                }
                key={i}
              >
                <div className="message-header">
                  <a
                    href={"#collapsible-message-accordion-" + i}
                    data-action="collapse"
                    onClick={() => changeTab(i)}
                  >
                    {tab.title}
                  </a>
                </div>
                <div
                  id={"collapsible-message-accordion-" + i}
                  className={
                    "message-body is-collapsible " +
                    (i === activeTab ? "is-active" : "")
                  }
                  data-parent="accordion_first"
                >
                  <div className="message-body-content">{tab.content}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Collapsibles;
