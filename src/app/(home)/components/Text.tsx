import Image from "next/image";
import flower from "../../../assets/flower.png";

export default function Text() {
  return (
    <section className="mt-[-15px]">
      <div className="container">
        <div className="relative flex justify-center items-center h-[330px]">
          <h2
            data-aos="zoom-in-up"
            className="max-w-[235px] text-center text-[18px]"
          >
            Урматтуу туугандар, <br /> бир туугандар, жээндер, <br /> бөлөлөр,
            куда-сөөк,
            <br /> дос-жарандар, кесиптештер <br /> жана кошуналар!
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
