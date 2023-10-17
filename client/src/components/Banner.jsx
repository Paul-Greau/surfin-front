import React from "react";
import { surfImg } from "../assets/";

import { GiSurferVan } from "react-icons/gi";

function Banner() {
  return (
    <div className="w-full bg-white py-16 px-5 sm:px-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-5">
        <img
          className="w-[500px] mx-auto my-auto"
          src={surfImg}
          alt="surf image"
        />
        <div className="flex flex-col justify-center ">
          <div className="flex items-center bg-primary w-max px-6 py-1 rounded-r-lg">
            <GiSurferVan size={30} color="white" className="pb-1" />
            &nbsp; &nbsp;
            <p className="font-bold  text-white"> Vivez la passion du surf</p>
          </div>
          <h1 className="md:text-4xl sm:text-3xl text-2xl text-secondary font-bold py-2">
            Trouvez votre surf camp idéal !
          </h1>
          <p className="text-gray-600">
            Peu importe votre niveau de surf, découvrez des surf camps
            exceptionnels à travers le monde, où l'aventure et la progression
            sont au rendez-vous
          </p>
        </div>
      </div>
    </div>
  );
}
export default Banner;
