import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { paketImage } from "../utils.js";

const Paket = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">
        🌟 Kenalin, Paket Worksheet Islami
      </h1>
      <div className="my-6">
        <Swiper
          autoplay={{
            delay: 1000, // Jeda 2.5 detik
            disableOnInteraction: true, // Tetap lanjut autoplay meski sudah di-klik/swipe manual
          }}
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {paketImage.map((img) => (
            <SwiperSlide key={img.id}>
              <img src={img.url} alt={img.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="text-center mb-4">
        Lebih dari 1200+ halaman worksheet lembar aktivitas anak tema islam yang
        seru dan menyenangkan
      </p>
      <div className="flex flex-col items-start gap-4">
        <h3 className="text-lg font-bold">
          Dengan Fitur utama sebagai berikut:
        </h3>
        <div>
          <h5 className="text-md font-bold">✅ Printable</h5>
          <p>
            Mudah dicetak untuk dijadikan aktivitas belajar offline yang menarik
            bagi anak-anak.
          </p>
        </div>
        <div>
          <h5 className="text-md font-bold">✅ Interaktif</h5>
          <p>
            Berisi kuis, teka-teki, dan permainan edukatif yang mengasah
            kecerdasan sambil bermain.
          </p>
        </div>
        <div>
          <h5 className="text-md font-bold">✅ Desain Menarik</h5>
          <p>
            Warna cerah, ilustrasi menarik, dan karakter lucu membuat anak-anak
            tertarik untuk belajar.
          </p>
        </div>
        <div>
          <h5 className="text-md font-bold">✅ Beragam Materi Edukatif</h5>
          <p>
            Meliputi topik-topik seperti huruf hijaiyah, Nabi dan Rasul, Shalat,
            Puasa dan lainnya – semua dalam satu paket lengkap
          </p>
        </div>
        <div>
          <h5 className="text-md font-bold">✅ Mudah Diakses</h5>
          <p>
            Format E-book yang bisa dibuka di tablet, smartphone, atau laptop,
            sehingga mudah dibawa kemanapun.
          </p>
        </div>
        <div>
          <h5 className="text-md font-bold">✅ Full Bahasa Indonesia.</h5>
        </div>
      </div>
      <div className="bg-[#ffff00] rounded-lg shadow-md my-8 p-2">
        <h3 className="text-center font-bold italic">
          Dengan fitur-fitur ini, belajar jadi lebih fleksibel dan menarik –
          mendukung berbagai gaya belajar Agama anak-anak!
        </h3>
      </div>
    </div>
  );
};

export default Paket;
