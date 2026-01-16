import React from "react";
import { imageList } from "../utils.js";

const Hero = () => {
  return (
    <div className="text-center bg-[#0d4875] p-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-[#ffff00]">
          🕌 Ubah Waktu Bermain Si Kecil Menjadi Investasi Pahala Jariyah untuk Ayah Bunda
        </h1>
        <p className="font-bold text-white text-lg">
          Bukan sekadar bermain, tapi aktivitas yang menanam nilai islami sejak dini dan terus mengalirkan pahala.😍
        </p>
        <div className="my-4 border-4 border-blue-500 rounded-md shadow-md">
          <img src={imageList[0].url} alt={imageList[0].alt} />
        </div>
        <p className="text-lg text-white">
          Kini hadir! {" "}
          <span className="font-bold">
            1200+ Halaman Worksheet Islami
          </span>{" "}
          Penuh Warna yang Didesain Khusus Agar Si Kecil Belajar Sambil Bermain Tanpa Merasa Bosan
        </p>
        <div className="p-4 my-4 rounded-md shadow-md text-start bg-white">
          <h3 className="text-2xl font-bold mb-4">
            📌 Ayah Bunda, apakah ini yang sedang dirasakan?:
          </h3>
          <p>❌ Si kecil lebih cepat menghafal lagu tiktok daripada doa-doa harian</p>
          <p>❌ Ingin aktivitas yang mendidik, tapi tetap seru dan nggak bikin anak bosan</p>
          <p>❌ Waktu berkualitas bersama anak sering tergeser oleh gadget</p>
          <p>❌ Buku belajar mahal & cepat habis isinya</p>
          <p>❌ Ingin menanamkan nilai-nilai Islam, tapi masih bingung cara yang menyenangkan</p>
        </div>
        <p className="text-lg text-[#ffff00] font-bold">
          Kalau Bunda pernah ngalamin ini, tenang... <br /> Sekarang ada solusi
          yang praktis & bikin anak semangat belajar agama di rumah!
        </p>
      </div>
    </div>
  );
};

export default Hero;

