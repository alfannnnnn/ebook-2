import React from "react";
import { testimonialsImage } from "../utils.js";

const Testimonials = () => {
  return (
    <div>
      <div className="my-8">
        <h1 className="text-xl font-bold text-center">
          Kata mereka yang sudah beli
        </h1>
        <div className="my-8">
          {testimonialsImage.map((img) => (
            <img src={img.url} alt={img.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
