import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import storyHEFU from "../img/theStoryHEFU.jpg";

import IndieVibes from "../components/indieVibes/IndieVibes";
import GrainOfHistory from "../components/grainOfHistory/GrainOfHistory";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="section">
        <img src={storyHEFU} className="story-hefu" alt="story of HEFU" />
        <div className="container">
          <IndieVibes />
        </div>
        <GrainOfHistory />
      </main>
      <Footer />
    </>
  );
};

export default Home;
