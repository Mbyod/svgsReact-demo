import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Map from "../components/map/Map";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="section">
        <Map />
      </div>
      <Footer />
    </>
  );
};

export default About;
