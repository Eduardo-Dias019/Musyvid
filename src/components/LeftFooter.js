//CSS
import "./LeftFooter.css";

//IMAGES
import logo from "../assets/Logo.png";
import like from "../assets/like.png";
import folder from "../assets/folder.png";

const LeftFooter = () => {
  return (
    <div>
      <div className="leftFooter">
        <div id="logo">
          <img src={logo} alt="Logo" />
          <h1>Musyvid</h1>
        </div>
        <div className="listFooter">
          <span id="like-button">
            <img src={like} alt="like-icon" />
            <h4>Curtidas</h4>
          </span>

          <span id="add-playlist">
            <img src={folder} alt="folder-icon" />
            <h4>Criar Playlist</h4>
          </span>
        </div>
        <div className="list-playlist">
          <span className="playlistTrap">
            <img
              src="https://i1.sndcdn.com/artworks-ZYSjzutOiFgzzNtt-LMDkzQ-t500x500.jpg"
              alt="coverplaylist-trap"
            />
            <h4>Trap</h4>
          </span>
          <span className="playlistRap">
            <img
              src="https://studiosol-a.akamaihd.net/letras/272x272/albuns/7/9/4/1/617091516105496.jpg"
              alt="coverplaylist-rap"
            />
            <h4>Rap Nacional</h4>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftFooter;
