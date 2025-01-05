"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain w-20 h-24" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="px-8text-4xl md:text-6xl font-bold">
            Eva Smile Oturum ve Danışmanlık Hizmetleri
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Eva Smile Oturum ve Danışmanlık olarak, yıllardır bireysel müşterilere ve büyük firmalara profesyonel hizmet sunuyoruz. Oturum ve çalışma izinleri, vatandaşlık işlemleri ve danışmanlık alanlarında uzmanlaşan ekibimizle, hızlı ve güvenilir çözümler üretiyoruz.

Müşteri odaklı yaklaşımımız ve tecrübemizle her adımda yanınızdayız. Güvenilir rehberiniz olarak, en karmaşık süreçlerde dahi yolunuzu kolaylaştırıyoruz.

Eva Smile – Çözüm ortağınız.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
          <Link
          href="/about"
          className="p-4 rounded-lg ring-1 ring-black bg-black text-white  flex items-center justify-center"
        >
          <span className="text-white mr-1">Hakkimizda</span>
         
        </Link>
        <Link
          href="/contact"
          className="p-4 rounded-lg ring-1 ring-black bg-black text-white  flex items-center justify-center"
        >
          <button className="p-4 rounded-lg ring-1 ring-black">
              Iletisim
            </button>
         
        </Link>
           
           
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;