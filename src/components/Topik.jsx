import React from "react";
import { topikImage } from "../utils.js";

const Topik = () => {
  return (
    <div className="py-4">
      <div className="bg-[#0d4875] py-4 px-8 text-center text-white font-bold">
        <h1 className="text-2xl">📦 Apa Aja Isi Worksheetnya?</h1>
      </div>
      <p className="text-black text-xl text-center my-8">
        📖 <span className="font-bold">Total 24 topik Islami,</span> <br />{" "}
        yaitu:
      </p>
      <img src={topikImage[0].url} alt={topikImage[0].alt} />
      <div className="px-8">
        <p className="font-bold text-center my-8 text-lg">
          Semua disusun rapi dalam file PDF, gampang diakses & dicetak kapan
          pun.
        </p>
      </div>
    </div>
  );
};

export default Topik;
