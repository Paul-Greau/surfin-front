/* eslint-disable no-useless-escape */
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "", // alert(JSON.stringify(values, null, 2));
      email: "",
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
      // .matches(
      //   /^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!hotmail|gmail|googlemail|yahoo|gmx|ymail|outlook|bluewin|protonmail|t\-online|web\.|online\.|aol\.|live\.)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,4}|\d{1,3})(\]?)$/,
      //   "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      // ),
    }),
    onSubmit: (values, { resetForm, setStatus }) => {
      // URL API
      const apiUrl = import.meta.env.VITE_APP_API_URL;

      // Fetch post data
      Axios.post(`${apiUrl}/api/post`, values)
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

      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="my-4">
      <p className="text-left text-xl py-3">
        Inscrivez vous gratuitement ici&nbsp;:
      </p>
      <input
        id="name"
        placeholder="Votre prénom"
        className="p-3  w-full rounded-md text-black mb-3"
        type="text"
        {...formik.getFieldProps("name")}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="bg-red-300 text-red-700 text-center py-2 -mt-4 mb-3 rounded-b-lg">
          {formik.errors.name}
        </div>
      ) : null}

      <input
        id="lastName"
        placeholder="Votre nom"
        className="p-3  w-full rounded-md text-black mb-3"
        type="text"
        {...formik.getFieldProps("lastName")}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="bg-red-300 text-red-700 text-center py-2 -mt-4 mb-3 rounded-b-lg">
          {formik.errors.lastName}
        </div>
      ) : null}

      <input
        id="email"
        placeholder="Votre email"
        className="p-3  w-full rounded-md text-black mb-3"
        type="email"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="bg-red-300 text-red-700 text-center py-2 -mt-4 mb-3 rounded-b-lg">
          {formik.errors.email}
        </div>
      ) : null}

      <button
        type="submit"
        className="bg-secondary text-white rounded-md font-medium w-full px-6 py-3 cursor-pointer hover:bg-slate-400"
      >
        Envoyer
      </button>
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
    </form>
  );
};

export default Formik;
