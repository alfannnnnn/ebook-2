import React from "react";
import { bonusImage } from "../utils";
import Countdown from "./Countdown";

const BonusAndPricing = () => {
  return (
    <div>
      <div className="bg-[#0d4875] p-4 text-center text-white font-bold text-xl">
        <h1>🎁 BONUS KHUSUS UNTUK 25 ORANG TERCEPAT!</h1>
      </div>
      <div className="p-4">
        <img src={bonusImage[0].url} alt={bonusImage[0].alt} />
        <p className="my-4">
          1. 30 days tracing & coloring (31 halaman) <br /> 2. Activity Ramadhan
          For Kids (58 halaman)
          <br /> 3. Jurnal Ramadhan For Mom (31 halaman)
          <br /> 4. Muslim - 99 Asmaul Husna (51 halaman)
          <br /> 5. Muslim - Huruf Hijaiyah (31 halaman)
          <br />
          6. Muslim - Kaligrafi (12 halaman)
          <br /> 7. Menulis Huruf Hijaiyah (31 halaman) 8. Anak Muslim (40
          halaman)
        </p>
        <h1 className="text-cl text-center">✅ TOTAL 250+ halaman bonus!</h1>
      </div>
      <div className="bg-[#0d4875] p-4 text-center text-white font-bold text-xl">
        <h1>💻 Format Produk:</h1>
      </div>
      <div className="p-6">
        ✅ File PDF, kualitas HD <br /> ✅ Full Bahasa Indonesia <br /> ✅
        Dikirim lewat WhatsApp & Email <br /> ✅ Bisa dibuka di HP / Tablet /
        Laptop <br /> ✅ Tinggal cetak & pakai kapan saja
      </div>
      <div className="bg-[#0d4875] p-4 text-center text-white font-bold text-xl">
        <h1>💸 Harga Spesial Hari Ini:</h1>
      </div>
      <div className="p-6 text-center">
        <h1 className="text-2xl text-green-600 font-bold mb-4">
          Cuma Rp 57.000
        </h1>
        <p className="text-lg">
          📥 Beli sekali, bisa Digunakan selamanya
          <br />
          🛍️ Ivestasi Murah jangka panjang untuk perkembangan anak!
        </p>
      </div>
      <Countdown />
      <p className="text-center my-4">
        🎯 Siap Dampingi Anak Belajar Islam dari Rumah? <br />
        📲 Klik tombol di bawah untuk dapatkan worksheet-nya sekarang
      </p>
      <a
        href="https://nusaibadigital.orderonline.id/1200-worksheet-anak-tema-islami-bonus"
        className="flex items-center justify-center my-8"
      >
        <button className="py-2 px-4 w-10/12 mx-auto bg-green-600 hover:bg-green-700 text-white font-bold rounded-md shadow-md cursor-pointer">
          BELI SEKARANG
        </button>
      </a>
    </div>
  );
};

export default BonusAndPricing;
