import React from "react";

import Form from "./Formik";

function FormSection() {
  return (
    <div className="w-full py-16 text-white bg-primary px-5 sm:px-16" id="form">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center">
        <div className="lg:col-span-2 ml-0 sm:ml-0">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Recevez notre selection des meilleurs
            <br /> Séjour Surf !
          </h1>
          <p>Embarquez pour l'aventure</p>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default FormSection;
