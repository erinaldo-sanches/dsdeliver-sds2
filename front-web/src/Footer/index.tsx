import './styles.css';
import { ReactComponent as YouTubeIcon } from "../Images/youtube.svg";
import { ReactComponent as LinkedInIcon } from "../Images/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../Images/instagram.svg";

function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª edição do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YouTubeIcon />

                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <LinkedInIcon />

                </a>
                <a href="https://www.instagram.com/devsuperior.ig/">
                    <InstagramIcon />

                </a>
            </div>

        </footer>
    )
}

export default Footer;