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
          <h2 className={`text-2xl mb-1 `}>Ресторан «Altyn Palace»</h2>
          <p className={`text-gray-600`}>адрес: 115 ул. Горького, Бишкек</p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="mt-[20px] w-full max-w-5xl h-[350px] rounded-xl overflow-hidden shadow mb-[40px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16401.947267991767!2d74.5822540903403!3d42.86045329080963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb62ae4f98a25%3A0xf6a875712ceb8408!2sAltyn%20Palace!5e0!3m2!1sru!2skg!4v1757685043254!5m2!1sru!2skg"
            width="100%"
            height="100%"
            frameBorder={0}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
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
