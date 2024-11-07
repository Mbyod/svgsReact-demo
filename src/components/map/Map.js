import "./style.css";
import logo_banner from "../../img/logo_banner.png";

const Map = () => {
  return (
    <div className="map-container">
      <img src={logo_banner} className="logo_banner" alt="logo" />

      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184.4721495307922!2d46.04007249262882!3d51.53244924350881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c7c1ffdc2003%3A0x1c64ddc6c23392ba!2sUlitsa%20Moskovskaya%2C%2053%2C%20Saratov%2C%20Saratovskaya%20oblast&#39;%2C%20410031!5e0!3m2!1sen!2sru!4v1730642971045!5m2!1sen!2sru"
        width="600"
        height="450"
        // style="border:0;"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </div>
  );
};

export default Map;
