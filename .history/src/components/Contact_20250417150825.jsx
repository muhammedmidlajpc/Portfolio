import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Muhammed Midlaj PC",
          from_email: form.email,
          to_email: "midlajpc531@gmail.com",
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: ""
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="">
          <div className="flex gap-16 m-5">
            <div
              className="tech-sub"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/_aqua_aizen?igsh=MnFtcTl3cDl5cWpy"
                )
              }
            >
              <img
                src="https://img.icons8.com/?size=100&id=32292&format=png&color=ffffff"
                alt="react"
                className="instagram"
              />
              <p>Instagram</p>
            </div>
            <div
              className="tech-sub"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.linkedin.com/in/muhammedmidlajpc")
              }
            >
              <img
                src="https://img.icons8.com/?size=100&id=447&format=png&color=ffffff"
                alt="linkedin"
              />
              <p>LinkedIn</p>
            </div>
          </div>
          <div className="flex gap-16 m-5">
            <div
              className="tech-sub"
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://github.com/muhammedmidlajpc")}
            >
              <img
                src="https://img.icons8.com/?size=100&id=12598&format=png&color=ffffff"
                alt="github"
              />
              <p>GitHub</p>
            </div>
            <div
              className="tech-sub"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  `https://wa.me/+918075447536?text=${encodeURIComponent(
                    "Hello, I am interested in your services!"
                  )}`
                )
              }
            >
              <img
                src="https://img.icons8.com/?size=100&id=16712&format=png&color=ffffff"
                alt="whatsapp"
              />
              <p>WhatsApp</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
