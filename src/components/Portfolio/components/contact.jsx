import React, { useState } from "react";
import SectionTitle from "../../../commons/SectionTitle";
import PofileImage from "../../../assets/satish.png";
import { Linkedin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const initialContactObj = {
    name: "",
    email: "",
    message: "",
  };

  const [data, setData] = useState(initialContactObj);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <div className="w-full">
      <div className="container mx-auto text-center px-8">
        <div className="">
          <SectionTitle>Get in Touch</SectionTitle>
          <p className="text-xl font-semibold mb-6 leading-8 mt-5">
            Ready to bring your ideas to life? Let's create something amazing
            together.
          </p>
        </div>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="bg-white/5 backdrop-blur-sm  border border-white/10 rounded-lg text-left p-8">
            <div className="text-2xl font-bold">Get in Touch</div>
            <div className="mt-4">
              <div className="flex items-center gap-5 mb-4">
                <Mail />
                <div className="flex flex-col items-start">
                  <span className="text-sm">Email</span>
                  <span className="text-base font-semibold">
                    ksatishreddy76@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-4">
                <Linkedin />
                <div className="flex flex-col items-start">
                  <span className="text-sm">Linked In</span>
                  <span className="text-base font-semibold">
                    satish-reddy-90870b233
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5 ">
                <Phone />
                <div className="flex flex-col items-start">
                  <span className="text-sm">Phone</span>
                  <span className="text-base font-semibold">
                    +91 7386324298
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white/5 backdrop-blur-sm  border border-white/10 rounded-lg text-left p-8">
              <div className="text-2xl font-bold">Contact Me</div>
              <div className="mt-4">
                <label htmlFor="name">Name</label>
                <input
                  className="w-full outline-none border-none rounded-md mt-1 py-2 px-4 bg-transparent border-2 "
                  style={{ border: "1px solid grey" }}
                  value={data?.name}
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4 flex flex-col items-start gap-1">
                <label htmlFor="email">Email</label>
                <input
                  className="w-full outline-none border-none rounded-md mt-1 py-2 px-4 bg-transparent border-2 "
                  style={{ border: "1px solid grey" }}
                  value={data?.email}
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="message">Message</label>
                <textarea
                  className="w-full outline-none border-none rounded-md mt-1 py-2 px-4 bg-transparent border-2 "
                  style={{ border: "1px solid grey" }}
                  value={data?.message}
                  id="message"
                  name="message"
                  placeholder="Enter Message"
                  rows={4}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <button className="port-gradient-btn px-4 py-2 rounded-full">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
