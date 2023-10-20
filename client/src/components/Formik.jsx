import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      codePostal: "",
      city: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Doit comporter 15 caractères ou moins")
        .required("Votre prénom est requis"),
      lastName: Yup.string()
        .max(20, "Doit comporter 20 caractères ou moins")
        .required("Votre nom est requis"),
      email: Yup.string()
        .email("Adresse e-mail invalide")
        .required("Votre email est requis"),
      codePostal: Yup.string()
        .required("Le code postal est requis")
        .matches(/^\d{5}$/, "Code postal invalide (5 chiffres requis)"),
    }),
    onSubmit: (values, { resetForm, setStatus }) => {
      // const apiUrl = import.meta.env.VITE_APP_API_URL;

      Axios.post("https://surfin-api.isoluti.com/api/post", values)
        .then((response) => {
          setStatus(response.status);
          console.log(response);
          resetForm();
          setStatus({ sent: true, message: "Message envoyé !" });
        })
        .catch((error) => {
          resetForm();
          setStatus({ sent: false, message: `Oups ! ${error}` });
        });
    },
  });

  const [cities, setCities] = useState([]);
  const [isCodeValid, setIsCodeValid] = useState(false);

  useEffect(() => {
    const { codePostal } = formik.values;
    if (codePostal.length === 5 && /^\d{5}$/.test(codePostal)) {
      Axios.get(`https://geo.api.gouv.fr/communes?codePostal=${codePostal}`)
        .then((response) => {
          setCities(response.data);
          setIsCodeValid(true);
        })
        .catch((error) => {
          console.log(error);
          setCities([]);
          setIsCodeValid(false);
        });
    } else {
      setCities([]);
      setIsCodeValid(false);
    }
  }, [formik.values.codePostal]);

  return (
    <form onSubmit={formik.handleSubmit} className="my-4">
      <p className="text-left text-xl py-3">
        Inscrivez vous gratuitement ici&nbsp;:
      </p>
      <input
        name="name"
        placeholder="Votre prénom"
        className="p-3 w-full rounded-md text-black mb-3"
        {...formik.getFieldProps("name")}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="bg-red-300 text-red-700 text-center py-2 -mt-4 mb-3 rounded-b-lg">
          {formik.errors.name}
        </div>
      ) : null}

      <input
        name="lastName"
        placeholder="Votre nom"
        className="p-3 w-full rounded-md text-black mb-3"
        {...formik.getFieldProps("lastName")}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="bg-red-300 text-red-700 text-center py-2 -mt-4 mb-3 rounded-b-lg">
          {formik.errors.lastName}
        </div>
      ) : null}

      <input
        name="email"
        placeholder="Votre email"
        className="p-3 w-full rounded-md text-black mb-3"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="bg-red-300 text-red-700 text-center py-2 -mt-4 mb-3 rounded-b-lg">
          {formik.errors.email}
        </div>
      ) : null}

      <input
        name="codePostal"
        placeholder="Votre code postal"
        className="p-3 w-full rounded-md text-black mb-3"
        {...formik.getFieldProps("codePostal")}
      />
      {formik.touched.codePostal && formik.errors.codePostal ? (
        <div className="bg-red-300 text-red-700 text-center py-2 -mt-4 mb-3 rounded-b-lg">
          {formik.errors.codePostal}
        </div>
      ) : null}

      {isCodeValid && (
        <select
          name="city"
          className="p-3 w-full rounded-md text-black mb-3"
          {...formik.getFieldProps("city")}
        >
          <option value="">Sélectionnez une ville</option>
          {cities.map((city) => (
            <option key={city.code} value={city.nom}>
              {city.nom}
            </option>
          ))}
        </select>
      )}

      {formik.status && formik.status.message && (
        <p
          className={`alert ${
            formik.status.sent
              ? "bg-green-300 text-green-700"
              : "bg-red-300 text-red-700"
          } text-center py-2 mb-3 -mt-1 rounded-b-lg`}
        >
          {formik.status.message}
        </p>
      )}

      <button
        type="submit"
        className="bg-secondary text-white rounded-md font-medium w-full px-6 py-3 cursor-pointer hover-bg-slate-400"
      >
        Envoyer
      </button>
    </form>
  );
};

export default Formik;
