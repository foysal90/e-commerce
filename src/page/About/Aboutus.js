import React from "react";
import img1 from "../../assets/cp-removebg-preview.png";
const Aboutus = () => {
  return (
    <div>
      <h1 className="text-center text-2xl mt-5 font-extrabold"> About us</h1>

      <div className="hero max-h-screen my-5 bg-base-200">
        <div className="hero-content flex-col-2 lg:flex-row grid grid-cols-2 gap-8">
          <img
            src={img1}
            className="rounded-lg shadow-xl" alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
