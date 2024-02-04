import Image from "next/image";
import React from "react";
import Background from "../BackGround/Background";
import { monserrat, outfit } from "@/app/ui/fonts";

function Home() {
  return (
    <section className="w-[90%] min-h-[100vh] flex justify-center items-center relative">
      <Background />
      <section className="w-full  sm:w-2/4 h-[100vh] pt-20  text-white flex flex-col justify-center  gap-10  z-40">
        <h1
          className={`${monserrat.classname} uppercase w-full xl:w-[961px]  leading-none  font-bold text-3xl xl:text-[70px] text-pretty text-shadow-customShadow relative`}
        >
          Collect <br /> Mother Mary <br />
          Art{" "}
          <span className="relative w-[110%]">
            nft <div className="elipse rounded-full top-4 right-3"></div>
          </span>
        </h1>
        <p
          className={`${outfit.className} font-outfit lg:text-[20px] max-w-[500px] text-wrap whitespace-line `}
        >
          Find the best upcoming and live NFT drops. Moonly provides analytics
          to help you make good NFT investments.
        </p>
        <div className="relative">
          <button
            className={`${monserrat.classname} uppercase bg-gradient-to-b p-2 from-[#FECB48] hover:bg-red-300 to-[#b38512] rounded-[15px] max-w-[216px] max-h-[66px] text-textbuttonColor text-[8px] font-bold `}
          >
            Ver en opensea
          </button>
          <Image
            src="/svg/star.svg"
            alt="star"
            width={35}
            height={35}
            className="absolute -left-7 -bottom-7"
          />
        </div>
      </section>
      <section className="w-2/4 hidden sm:block">
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/ff28/033c/db6af3f1420599af15c38573944c9f79?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6K-f~Tf74jQ9Y91lgGwOX1bqLJWnyB-~kS6PhTEPO8eNO5p6Cybp0ASMNRrI26Z655YX87O5uK-4-LFGPOuUmtI7Dxa9ObOsP6w4qAJxA7-udTpLpXFF3geo3Ku5OuZZQ~AqTv8pX6tRuDSp0lGsHwfvCOeZxQ2sSqag1tIg0TaAo425BGudwvNXIbPPvTIXTMXTOVxjblkGSbNPBUu5ZYaYUlnMNYkDND58MndilN-oJUPME-jmimEbhua~EW--gXgOAAQKgHXb0XwMBhID6rUrXsZeTYBfd4YVPcyqOXiBJ~mUb3uTAYB-m9Gl8oiv3yyYw46jjt1JBzfkeqayw__"
          }
          alt="virgin"
          width={700}
          height={700}
          className="object-contain h-[500px]  absolute bottom-0"
        />
      </section>
    </section>
  );
}

export default Home;
