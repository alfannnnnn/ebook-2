import React, { useState, useEffect } from "react";

const StandardCountdown = () => {
  // Total detik dari 02:51:20
  const INITIAL_TIME = 2 * 3600 + 51 * 60 + 20;
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

  useEffect(() => {
    // Jika waktu habis, berhenti
    if (timeLeft <= 0) return;

    // Kurangi 1 detik setiap interval
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    // Bersihkan interval saat komponen ditutup/refresh
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Fungsi untuk mengubah detik menjadi format HH:MM:SS
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return {
      hours: String(h).padStart(2, "0"),
      minutes: String(m).padStart(2, "0"),
      seconds: String(s).padStart(2, "0"),
    };
  };

  const time = formatTime(timeLeft);

  return (
    <div className="p-2 mt-2 text-center">
      <div className="px-2 py-4 bg-black rounded-lg text-white">
        <h1 className="text-xl font-bold">
          Promo murah ini akan berakhir dalam:
        </h1>
        <div className="flex items-center justify-center gap-4 my-4 font-bold">
          <div className="flex items-center gap-1">
            <div className="bg-yellow-500 rounded-md py-2 px-4">
              <h1 className="text-black">{time.hours}</h1>
            </div>
            <p>Jam</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-yellow-500 rounded-md py-2 px-4">
              <h1 className="text-black">{time.minutes}</h1>
            </div>
            <p>Menit</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-yellow-500 rounded-md py-2 px-4">
              <h1 className="text-black">{time.seconds}</h1>
            </div>
            <p>Detik</p>
          </div>
        </div>
        {/* <span>{time.hours} Jam</span>:<span>{time.minutes} Menit</span>:
        <span>{time.seconds} Detik</span> */}
      </div>
    </div>
  );
};

export default StandardCountdown;
