import React, { useState, useRef, useEffect } from "react";
import SectionTitle from "../../../commons/SectionTitle";
import ProfileImage from "../../../assets/satish.png";
import { Linkedin, Phone, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import EmailLoader from "../../../commons/EmailLoader";

const Contact = () => {
  const initialContactObj = {
    user_name: "",
    user_email: "",
    message: "",
  };

  const [data, setData] = useState(initialContactObj);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // your service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // your template ID
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // your public key
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setData(initialContactObj);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatusMessage("Something went wrong. Please try again.");
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (statusMessage) {
      setTimeout(() => {
        setStatusMessage("");
      }, 5000);
    }
  }, [statusMessage]);

  return (
    <div className="w-full">
      <div className="container mx-auto text-center px-8">
        <div>
          <SectionTitle>Get in Touch</SectionTitle>
          <p className="text-xl font-semibold mb-6 leading-8 mt-5">
            Ready to bring your ideas to life? Let's create something amazing
            together.
          </p>
        </div>

        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Contact Info */}
          <div className="border-primary bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-left p-8">
            <div className="text-2xl font-bold mb-6">Get in Touch</div>

            <div className="flex items-center gap-5 mb-4">
              <Mail className="text-blue-400" />
              <div className="flex flex-col items-start">
                <span className="text-sm">Email</span>
                <a
                  href="mailto:ksatishreddy76@gmail.com"
                  className="text-base font-semibold hover:underline"
                >
                  ksatishreddy76@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 mb-4">
              <Phone className="text-green-400" />
              <div className="flex flex-col items-start">
                <span className="text-sm">Phone</span>
                <a
                  href="tel:+917386324298"
                  className="text-base font-semibold hover:underline"
                >
                  +91 73863 24298
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 mb-4">
              <Linkedin className="text-blue-600" />
              <div className="flex flex-col items-start">
                <span className="text-sm">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/satish-reddy-90870b233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold hover:underline"
                >
                  satish-reddy-90870b233
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-primary bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                value={data.user_name}
                onChange={handleChange}
                className="border-primary w-full p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                value={data.user_email}
                onChange={handleChange}
                className="border-primary w-full p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={data.message}
                onChange={handleChange}
                className="border-primary w-full p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
              >
                Send Message
              </button>
              <p
                className={`w-full text-center ${statusMessage.includes("successfully") ? "text-green-600" : "text-red-700"}`}
              >
                {statusMessage}
              </p>
            </form>
          </div>
        </div>
      </div>

      {loading && (
        <div className="fixed top-0 left-0 w-full h-screen">
          <EmailLoader />
        </div>
      )}
    </div>
  );
};

export default Contact;
