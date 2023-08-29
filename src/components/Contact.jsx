import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zkiwu2d",
        "template_29qxk9m",
        form.current,
        "o4YF2CaFE2myEiwqx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          setDone(false);
        }
      );
  };

  return (
    <form
      className="max-w-lg mx-auto py-3  pb-20    "
      id="Contact"
      ref={form}
      onSubmit={sendEmail}
    >
      <SectionTitle id="works">Contact ME</SectionTitle>

      <div
        className="grid gap-6 mb-6 md:grid-cols-2 relative z-50  "
        data-aos="zoom"
      >
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="bg-gray-50 border relative z-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="bg-gray-50 border relative z-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            required
          />
        </div>
      </div>
      <div className="mb-6 relative z-50" data-aos="zoom">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-gray-50 border relative z-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="john.doe@company.com"
          required
        />
      </div>
      <div className="mb-6 relative z-50" data-aos="zoom">
        <label
          htmlFor="message"
          className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="block p-2.5 w-full relative z-50 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <button className="btn px-5 btn-success   relative z-50 ">SEND</button>
      <div>
        {done && (
          <h1 className="text-center text-3xl text-black dark:text-white">
            Thank You
          </h1>
        )}
      </div>
    </form>
  );
};

export default Contact;
