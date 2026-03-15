export default function Map() {
  return (
    <section>
      <div className="container">
        <div
          data-aos="zoom-in"
          className="flex items-center justify-center w-full my-6"
        >
          <h2 className={`px-4 text-[24px] tracking-wide uppercase`}>
            өткөрүлүүчү жай
          </h2>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="text-center"
        >
          <h2 className={`text-2xl mb-1 `}>Ресторан «Доор»</h2>
          <p className={`text-gray-600`}>адрес: ​Улица Мадиева, 8</p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="mt-[20px] w-full max-w-5xl h-[350px] rounded-xl overflow-hidden shadow mb-[40px]"
        >
          {/* <iframe
            width="100%"
            height="500"
            src="http://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A42.8189695093781%2C%22lon%22%3A74.64470744132997%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22bishkek%22%7D%2C%22org%22%3A%2270000001102464918%22%7D"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2005.56321847292!2d74.64347764068692!3d42.8180911319911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb42df3ae74f1%3A0x9c42a4a01a374bb6!2zOCDQnNCw0LTQuNC10LLQsCwg0JrQvtC6LdCU0LbQsNGA!5e0!3m2!1sru!2skg!4v1773559188656!5m2!1sru!2skg"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className="text-center">
          <h2 className="hero-text text-[32px] font-bold">Той ээлери:</h2>
          <h3 className="hero-text text-[24px] font-semibold">
            Эркин менен Замира
          </h3>
        </div>
      </div>
    </section>
  );
}
