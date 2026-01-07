import React from "react";
import { imageList } from "../utils.js";

const Hero = () => {
  return (
    <div className="text-center bg-[#0d4875] p-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-[#ffff00]">
          🕌 Mau Anak Cinta Islam Sejak Dini?
        </h1>
        <p className="font-bold text-white text-lg">
          Cukup Gunakan Worksheet Ini, dan Lihat Anak Belajar dengan Gembira! 😍
        </p>
        <div className="my-4 border-4 border-blue-500 rounded-md shadow-md">
          <img src={imageList[0].url} alt={imageList[0].alt} />
        </div>
        <p className="text-lg text-white">
          Lebih dari{" "}
          <span className="font-bold">
            1200+ lembar aktivitas anak tema Islami
          </span>{" "}
          siap pakai Didesain khusus untuk anak usia 3 tahun ke atas — belajar
          Tauhid, Akhlak, Ibadah, Sholat, Doa Harian, dll
        </p>
        <div className="p-4 my-4 rounded-md shadow-md text-start bg-white">
          <h3 className="text-2xl font-bold mb-4">
            📌 Masalah Umum Para Orang Tua:
          </h3>
          <p>❌ Anak lebih tertarik main HP daripada belajar</p>
          <p>❌ Susah cari bahan belajar agama yang sesuai usia anak</p>
          <p>❌ Gak ada waktu nyusun aktivitas edukatif tiap hari</p>
          <p>❌ Buku belajar mahal & cepat habis isinya</p>
          <p>❌ Ingin anak cinta Islam, tapi bingung harus mulai dari mana</p>
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
