"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getDataFromTable } from "@/services/supabase/crud";

import "swiper/css";

export default function Carrosel() {
  interface ITechs {
    id: number;
    src: string;
    alt: string;
  }

  const [logos, setLogos] = useState<ITechs[]>([]);

  const getLogos = async () => {
    const { ok, data } = (await getDataFromTable("techs")) as {
      ok: boolean;
      data: ITechs[];
    };

    if (!ok) return;

    setLogos(data);
  };

  useEffect(() => {
    getLogos();
  }, []);

  return (
    <section className="flex justify-center md:justify-around mb-20 swiper-container">
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={60}
        navigation
        loop
        autoplay
        breakpoints={{
          390: {
            width: 390,
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1440: {
            width: 1440,  
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
      >
        {logos.length > 0 &&
          logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="h-40 flex items-center justify-center">
                <Image
                  alt={logo.alt}
                  src={logo.src}
                  className="aspect-[3/2] object-contain"
                  width={180}
                  height={80}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
