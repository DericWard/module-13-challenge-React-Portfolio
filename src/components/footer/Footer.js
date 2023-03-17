import { FaGithub, FaLinkedin, FaWhatsapp, FaFilePdf} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./Footer.css";

function Footer () {
    return (
        <div className="social-icons">
            <a href="https://github.com/DericWard" target="_blank" rel="noopener noreferrer">
                <span title="GitHub">
                    <FaGithub />
                </span>
            </a>
            <a href="https://www.linkedin.com/in/deric-ward/" target="_blank" rel="noopener noreferrer">
                <span title="LinkedIn">
                    <FaLinkedin />
                </span>
            </a>
            <a href="mailto:dericward@hotmail.com" target="_blank" rel="noopener noreferrer">
                <span title="Email">
                    <FiMail />
                </span>
            </a>
            <a href="https://wa.me/+447877842304">
                <span title="WhatsApp">
                    <FaWhatsapp />
                </span>
            </a>
            <a href={process.env.PUBLIC_URL + "/assets/DericWardResume.pdf"} target="_blank" rel="noopener noreferrer">
                <span title="R&#233;sum&#233;">
                    <FaFilePdf />              
                </span>
            </a>
        </div>
    );
};

export default Footer;