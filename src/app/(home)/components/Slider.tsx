import SliderClient from "@/components/SliderClient";

export default function Slider() {
  return (
    <section>
      <div className="container">
        <div className="mb-[50px]">
          <h2 className="text-center text-[24px] uppercase mb-[20px] mt-[30px]">
            Фотоальбом
          </h2>
          <SliderClient
            images={[
              "/images/one.jpg",
              "/images/four.jpg",
              "/images/three.jpg",
              "/images/two.jpg",
              "/images/six.jpg",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
