import React from "react";
import { faqs } from "../utils.js";

const Faq = () => {
  return (
    <div>
      <div className="bg-[#0d4875] p-4 text-center text-white font-bold text-xl">
        <h1>Yang Sering Ditanyakan❓ </h1>
      </div>
      <div className="p-4">
        {faqs.map((faq) => (
          <div className="my-8 flex flex-col gap-2 p-4 bg-gray-200 rounded-lg shadow-md">
            <h1 className="font-bold">{faq.question}</h1>
            <p>{faq.answer}</p>
          </div>
        ))}
        <img src="/guarantee.webp" alt="guarantee" />
      </div>
    </div>
  );
};

export default Faq;
