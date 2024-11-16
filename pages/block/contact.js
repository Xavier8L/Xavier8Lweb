import Styles from "../../styles/block/contact.module.css";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";


export default function Contact() {
  return (
    <div className={Styles.container}>
      <div className={Styles.mail} ><CiMail /> : chenxavier8L@gmail.com</div>
      <div className={Styles.phone}><BsTelephone /> : 0614441662</div>
      <div className={Styles.github}>
        {/* Link to GitHub */}
        <a href="https://github.com/Xavier8L" target="_blank" rel="noopener noreferrer">
          <FaGithub /> : https://github.com/Xavier8L
        </a>
      </div>
      <div className={Styles.linkdin}>
        {/* Link to LinkedIn */}
        <a href="https://linkedin.com/in/shenglong-chen-586653205" target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin /> : linkedin.com/in/shenglong-chen-586653205
        </a>
      </div> 
    </div>
  );
}   