import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contactus = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xs5y8bp",
        "template_63u6a6q",
        form.current,
        "UiOrUgRr5b91M_7-a"
      )
      .then(
        (result) => {
          toast.success("Message sent succesfully")
          // alert("email sent succesfully")
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    console.log(formData.user_name);
    console.log(formData.user_email);
    console.log(formData.message);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact us!</h1>
          </div>
          <form ref={form} onSubmit={handleSubmit} action="">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    value={formData.user_name}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    value={formData.user_email}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    onChange={handleInputChange}
                    name="message"
                    value={formData.message}
                    className="textarea textarea-bordered"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
