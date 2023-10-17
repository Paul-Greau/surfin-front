import React from "react";

function Hero() {
  return (
    <div className="text-white ">
      <div className="max-w-3xl -mt-24 w-full mx-auto h-screen text-center flex flex-col justify-center px-2 [text-shadow:_2px_2px_1px_rgb(0_0_0_/_50%)]">
        <p className="text-tertiary font-bold p-2 mt-[-50px]">
          Surfez la vague de liberté !
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 [text-shadow:_2px_2px_1px_rgb(0_0_0_/_50%)]">
          Trouvez votre surf camp idéal
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-primary [text-shadow:_2px_2px_1px_rgb(255_255_255_/_30%)]">
            Vivez le surf intensément
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-tertiary [text-shadow:_2px_2px_1px_rgb(0_0_0_/_50%)]">
          Plongez dans l'univers du surf en découvrant notre collection de surf
          camps à travers le monde, adaptés à tous les niveaux
        </p>
        <a
          href="/#form"
          alt="go to music"
          type="button"
          className="bg-secondary w-48 rounded-md font-medium my-6 mx-auto py-3 text-white cursor-pointer hover:bg-primary"
        >
          S'inscrire
        </a>
      </div>
    </div>
  );
}

export default Hero;
