import Image from "next/image";
import flower from "../../../assets/flower.png";

export default function FooterText() {
  return (
    <section className="mb-[70px]">
      <div className="container">
        <div className="relative flex justify-center items-start h-[180px]">
          <h2
            data-aos="zoom-in-up"
            className="max-w-[235px] text-center text-[24px]"
          >
            Келиңиздер, тоюбуздун кадырлуу коногу болуңуздар!
          </h2>
          <div className="absolute top-0 z-20 w-[100%] h-[180px] flex justify-end">
            {/* <Image className="self-start" src={flower} alt="flower" /> */}
            <Image className="self-end" src={flower} alt="flower" />
          </div>
        </div>
      </div>
    </section>
  );
}
