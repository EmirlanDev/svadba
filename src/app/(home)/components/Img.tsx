import textImg from "../../../assets/textImg.png";
import Image from "next/image";

export default function Img() {
  return (
    <section className="">
      <div className="container">
        <div className="relative mt-[-82px]">
          <Image src={textImg} alt="text img" />
          <div className="second-gr flex items-end justify-center absolute top-0 z-10 w-full h-full">
            <h2
              data-aos="zoom-in-up"
              className="text-center text-[18px] mb-[-10px]"
            >
              Сиздерди <br /> уулубуз жана келинибиз
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
