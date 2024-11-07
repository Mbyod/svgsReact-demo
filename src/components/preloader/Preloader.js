import "./style.css";
import loader from "../../img/loader.png";
const Preloader = () => {
  return (
    <div className="preloader">
      <img src={loader} alt="loading" />
    </div>
  );
};

export default Preloader;
