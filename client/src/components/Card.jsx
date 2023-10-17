import React from "react";

function Card({ cardInfo }) {
  return (
    <div className="w-full shadow-xl  justify-between flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
      <div className="w-20 h-20 rounded-full mx-auto -mt-12 bg-secondary flex justify-center items-center">
        <img src={cardInfo.photo} alt="card icon" className="w-10 h-10" />
      </div>
      <h2 className="text-2xl font-bold text-center py-8">{cardInfo.name}</h2>
      <p className="text-center text-4xl font-bold">{cardInfo.price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b border-slate-300 mx-8 mt-8 break-words">
          {cardInfo.info.transmission}
        </p>
        <p className="py-2 border-b border-slate-3000 mx-8 break-words">
          {cardInfo.info.air_intake}
        </p>
        <p className="py-2 border-b border-slate-300 mx-8 break-words">
          {cardInfo.info.body_style}
        </p>
      </div>
      <button
        className="bg-secondary w-[200px] rounded-md text-white font-medium my-6 mx-auto px-6 py-3 cursor-pointer"
        type="button"
      >
        <a href="/#form" alt="go to music">
          S'incrire
        </a>
      </button>
    </div>
  );
}

export default Card;
