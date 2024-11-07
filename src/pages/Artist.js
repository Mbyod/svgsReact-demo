import { useParams } from "react-router-dom";
import { artistList } from "../helpers/artistList";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Artist = () => {
  const { id } = useParams();
  const artist = artistList[id];
  const isLinks = artist.links;

  return (
    <>
      <Navbar />
      <div className="section">
        <div className="artist-page">
          <h1 className="title">{artist.artistName}</h1>
          <div className="artist-info">
            <div className="artist-cover-container">
              <img
                src={artist.img}
                alt="artist cover"
                className="artist-cover"
              />
            </div>
            <div className="artist-cover__info">
              <p className="genres">{artist.genres}</p>
              {isLinks &&
                Object.keys(artist.links).map((key) => {
                  return (
                    <a className="music-links" href={artist.links[key]}>
                      Listen on {key}
                    </a>
                  );
                })}
            </div>
          </div>
          <iframe
            src={artist.spotify_widget}
            width="100%"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="stopifi widget"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Artist;
