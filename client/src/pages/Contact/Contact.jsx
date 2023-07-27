import React, { useState } from "react";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please Provide all fields");
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });
      //validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                    alt="ocontact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="contact-flex">
                    <h6>Contact With</h6>
                    <div className="card-flex">
                      <a href="https://www.youtube.com/watch?v=8cC-JfrTPgI">
                        <BsLinkedin />
                      </a>
                      <a href="https://www.youtube.com/watch?v=8cC-JfrTPgI">
                        <BsGithub />
                      </a>
                      <a href="https://www.youtube.com/watch?v=8cC-JfrTPgI">
                        <BsFacebook />
                      </a>
                    </div>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your Name"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <button onClick={handleSubmit} className="button" type="submit">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
