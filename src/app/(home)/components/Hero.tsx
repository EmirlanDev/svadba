import Image from "next/image";
import heroImg from "../../../assets/heroImg.png";

export default function Hero() {
  return (
    <section>
      <div className="container2">
        <div className="relative">
          <Image
            className="w-[100%] object-cover"
            src={heroImg}
            alt="heroImg"
          />
          <div className="gradient h-[100%] flex flex-col justify-end">
            <h2
              data-aos="zoom-in-up"
              className="hero-text text-[70px] leading-18 text-center"
            >
              R & G
            </h2>
            <h2
              data-aos="zoom-in-up"
              className="hero-text text-[50px] text-center"
            >
              <span className="mr-5">Ринат</span> Гулзат
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
