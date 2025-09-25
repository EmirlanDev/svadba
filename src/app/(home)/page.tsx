import Date from "./components/Date";
import Footer from "./components/Footer";
import FooterText from "./components/FooterText";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Img from "./components/Img";
import Map from "./components/Map";
import Music from "./components/Music";
import SecText from "./components/SecText";
import Slider from "./components/Slider";
import Text from "./components/Text";
import Time from "./components/Time";

export default function Home() {
  return (
    <>
      <Hero />
      <Music />
      <Text />
      <Img />
      <SecText />
      <Date />
      <Time />
      <Map />
      <Form />
      <Slider />
      <FooterText />
      <Footer />
    </>
  );
}
