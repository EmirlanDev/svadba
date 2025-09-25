import Image from "next/image";
import flower from "../../../assets/flower.png";

export default function SecText() {
  return (
    <section className="mt-[30px]">
      <div className="container">
        <div>
          <h2
            data-aos="zoom-in-up"
            className="hero-text text-[50px] text-start ml-[25px]"
          >
            Ринат
          </h2>
          <h3
            data-aos="zoom-in-up"
            className="hero-text text-center text-[32px] mt-[-20px]"
          >
            менен
          </h3>
          <h2
            data-aos="zoom-in-up"
            className="hero-text text-[50px] text-end mt-[-5px] mr-[15px]"
          >
            Гулзаттын
          </h2>
        </div>
        <div className="relative flex justify-center items-center h-[330px] mt-[-35px]">
          <h2
            data-aos="zoom-in-up"
            className="max-w-[235px] text-center text-[18px]"
          >
            Үйлөнүү тоюбузга <br /> арналган салтанаттуу <br /> ак дасторкондун
            <br />
            кадырлуу коногу болуп <br /> беришиңизди чоң урмат <br /> менен
            чакырабыз!
          </h2>
          <div className="absolute top-0 z-20 w-[100%] h-[330px] flex justify-between">
            <Image className="self-start" src={flower} alt="flower" />
            <Image className="self-end" src={flower} alt="flower" />
          </div>
        </div>
      </div>
    </section>
  );
}
