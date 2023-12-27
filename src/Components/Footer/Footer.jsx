import "./Style.css";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>Developed By: Lucas Menezes {"</>"}</p>
        <p>Built with ReactJS {<FaReact color="white" size={20} />}</p>
      </div>
      <nav>
        <p>My Social Media</p>
        <a href="https://github.com/lucasMenezesM" target="blank">
          <FaGithub color="white" size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-menezes-023600279/"
          target="blank"
        >
          {" "}
          <FaLinkedin size={30} color="white" />
        </a>
      </nav>
    </footer>
  );
}
