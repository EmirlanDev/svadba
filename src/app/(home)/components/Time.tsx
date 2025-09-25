import Countdown from "@/components/CountDown";
import Image from "next/image";
import uzor from "../../../assets/uzor.png";

export default function Time() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Countdown />
      <Image className="mt-[82px] mb-[40px]" src={uzor} alt="uzor" />
    </section>
  );
}
