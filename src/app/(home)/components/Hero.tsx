import Image from "next/image";
import heroImg from "../../../assets/heroImg.jpg";

export default function Hero() {
  return (
    <section>
      <div className="container2">
        <div className="relative max-w-[500px] mx-[auto]">
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
              S & M
            </h2>
            <h2
              data-aos="zoom-in-up"
              className="kyr italic text-[50px] text-center"
            >
              <span className="mr-5 ">Сыймык</span>Мүрөк
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
