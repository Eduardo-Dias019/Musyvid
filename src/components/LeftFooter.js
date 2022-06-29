//CSS
import "./LeftFooter.css"

//IMAGES
import logo from "../assets/Logo.png";
import like from "../assets/like.png";

const LeftFooter = () => {
  return (
    <div>
        
        <div className="leftFooter"> 
            <div id="logo"> 
                <img src={logo} alt="Logo" /> 
                <h1>Musyvid</h1>
            </div>
            <div className="listFooter">
                <ul>
                  <li id="like-button">
                    <img src={like} alt="like-icon" />
                    <h4>Curtidas</h4>
                  </li>
                </ul>
            </div>
{/*         <div className="listPlaylist">
            <ul>
                <li className="playlistTrap">
                  <img src="https://i1.sndcdn.com/artworks-ZYSjzutOiFgzzNtt-LMDkzQ-t500x500.jpg" alt="coverplaylist-trap" />
                  <h4>Trap</h4>
                </li>
              </ul>
            </div> */}
        </div>    

    </div>
  )
}

export default LeftFooter