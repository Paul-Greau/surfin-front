import React from "react";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1000px] mx-auto py-16 text-tertiary text-center px-5 sm:px-16">
      <div>
        <h1 className="w-full text-1xl font-bold text-tertiary sm:text-2xl md:text-3xl">
          Réservez votre aventure surf
        </h1>
        <p className="py-4">
          Trouvez votre prochaine aventure surf avec notre sélection exclusive
          de surf camps aux quatre coins du globe
        </p>
        <div className="w-[140px] m-auto">
          <div className="flex justify-between my-6">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
