import React from "react";
// import { topikImage } from "../utils.js";

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
      {/* <img src={topikImage[0].url} alt={topikImage[0].alt} /> */}
      <div className="px-8 " >
        <p>
          ✅️ Worksheet puasa (10 lembar) <br /> ✅️ Rukun iman & islam (7
          lembar) <br /> ✅️ Sholat & Wudhu (21 Lembar) <br /> ✅️ Sifat-sifat
          Allah (20 Lembar) <br />
          ✅️ Hadits-hadits pendek (25 Lembar) <br /> ✅️ Haji & Umroh (3
          lembar) <br />
          ✅️ Hari Besar Islam (23 lembar)
          <br /> ✅️ Hari Kiamat (4 lembar)
          <br /> ✅️ Angka bahasa arab (83 lembar)
          <br /> ✅️ Asmaul Husna (77 lembar)
          <br /> ✅️ Bulan Hijriyah (18 lembar)
          <br /> ✅️ Doa-doa pendek (22 lembar)
          <br /> ✅️ Huruf Hijaiyah (235 lembar) <br />
          ✅️ Kalimat Thoyyibah (15 lembar)
          <br /> ✅️ Makanan Halal (19 lembar)
          <br /> ✅️ Mengenal Harakat (3 lembar)
          <br /> ✅️ Nabi & Rasul (54 lembar)
          <br />
          ✅️ Najis dalam islam (4 lembar)
          <br /> ✅️ Nama Malaikat (5 lembar)
          <br /> ✅️ Perbuatan Terpuji (52 lembar)
          <br /> ✅️ Surat-surat pendek (34 lembar) <br />
          ✅️ Surga neraka (3 lembar) <br />
          ✅️ Mewarnai (100 lembar)
          <br /> ✅️ lain-lain (176 lembar)
        </p>
      </div>
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

