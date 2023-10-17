import React, { useState } from "react";
import Axios from "axios";

function Form() {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  // Target value onChange
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  // OnSumit Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
    };

    // URL API
    const apiUrl = import.meta.env.VITE_APP_API_URL;

    // Fetch post data
    Axios.post(`${apiUrl}/api/post/addmail`, userData)
      .then((response) => {
        console.log(response);
        setData({ name: "", lastName: "", email: "" });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("Server error response");
        } else if (error.request) {
          console.log("Network error request");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <p className="text-left text-xl py-3">
        Inscrivez vous gratuitement ici&nbsp;:
      </p>
      <div className="flex flex-col  items-center justify-between w-full ">
        <input
          className="p-3  w-full rounded-md text-black mb-3"
          type="text"
          placeholder="Votre prénom"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
        />
        <input
          className="p-3  w-full rounded-md text-black mb-3"
          type="text"
          placeholder="Votre nom"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          required
        />
        <input
          className="p-3  w-full rounded-md text-black mb-3"
          type="email"
          placeholder="Votre email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-secondary text-white rounded-md font-medium w-full px-6 py-3 cursor-pointer hover:bg-slate-400"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}

export default Form;
