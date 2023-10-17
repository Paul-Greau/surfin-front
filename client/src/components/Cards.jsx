import React from "react";
import { Icon1, Icon2, Icon3 } from "../assets/";

import Card from "./Card";

const cardsData = [
  {
    id: 1,
    name: "Autour du monde",
    price: "Découvrez",
    photo: Icon1,
    info: {
      transmission: "France",
      air_intake: "Europe",
      body_style: "Monde",
    },
  },
  {
    id: 2,
    name: "Tous niveaux",
    photo: Icon2,
    price: "Progressez",
    info: {
      transmission: "Débutant",
      air_intake: "Intermédiaire",
      body_style: "Avancé",
    },
  },
  {
    id: 3,
    name: "Stage de surf",
    price: "Partagez",
    photo: Icon3,
    info: {
      transmission: "Écoute",
      air_intake: "Entraide",
      body_style: "Pratique",
    },
  },
];

function Cards() {
  return (
    <div className="w-full py-40 bg-white px-5 sm:px-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardsData.map((card) => (
          <Card cardInfo={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
