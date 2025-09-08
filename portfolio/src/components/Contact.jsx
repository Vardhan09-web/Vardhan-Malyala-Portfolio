import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";
import { IoPhonePortraitOutline, IoLocationOutline } from "react-icons/io5";
import { Bio } from "../data/constants";

const Contact = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.current) {
    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)

        .then(
          () => {
            toast.success("Message sent successfully!");
            form.current.reset();
            setFormData({ name: "", email: "", subject: "", message: "" });
          },
          (error) => {
            toast.error("Error sending message. Please try again later.");
            console.error("EmailJS Error:", error);
          }
        );
    }
  };

  return (
    <div
      id="contact"
      className="relative z-10 flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Let&apos;s <span className="primary-color">Connect</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Ready to collaborate on innovative projects? Let&apos;s build
            something extraordinary together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="glass p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-4"
          >
            <h3 className="text-2xl font-semibold primary-color mb-2">
              Get In Touch
            </h3>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#c92085] outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#c68109] outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#7a0d8a] outline-none"
            />
            <textarea
              placeholder="Message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#c92085] outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full text-center bg-primary-color py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 font-semibold text-white"
            >
              Send Message
            </button>
          </form>
          <div className="glass p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col justify-between">
            <h3 className="text-2xl font-semibold primary-color mb-6">
              Contact Information
            </h3>
            <ul className="space-y-5 text-gray-300">
              <li className="flex items-center gap-3">
                <SiGmail className="text-[#c92085] text-xl" />
                <span className="text-white">vardhanmalyala@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <IoPhonePortraitOutline className="text-[#c68109] text-xl" />
                <span className="text-white">+91 8977182879</span>
              </li>
              <li className="flex items-center gap-3">
                <IoLocationOutline className="text-[#7a0d8a] text-xl" />
                <span className="text-white">H.No. 2-34, Gollapelli Mandal, Jagtial, Telangana - 505529
</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="primary-color font-medium text-lg mt-6 ">
                  Availability:
                </span>
                <span className="mt-6 text-white">Open for internships and full-time opportunities</span>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-200 mb-3">
                Connect with me
              </h4>
              <div className="flex gap-4">
                <a
                  href={Bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 transition-colors duration-300"
                >
                  <FaGithub className="text-gray-400 hover:text-white text-xl" />
                </a>

                <a
                  href={Bio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 transition-colors duration-300"
                >
                  <FaLinkedinIn className="text-gray-400 hover:text-[#0A66C2] text-xl" />
                </a>

                <a
                  href={Bio.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 transition-colors duration-300"
                >
                  <SiLeetcode className="text-gray-400 hover:text-[#FFA116] text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
};

export default Contact;
