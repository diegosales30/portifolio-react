import {
  FaGithubSquare,
  FaGooglePlusSquare,
  FaLinkedin,
  FaCopyright,
} from "react-icons/fa";
import { FooterStyle } from "./style";

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <section>
          <a href="https://github.com/diegosales30" target="_blank ">
            <FaGithubSquare />
          </a>
          <a href="mailto:diegofelipesales23@gmail.com" target="_blank ">
            <FaGooglePlusSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-felipe-js/"
            target="_blank "
          >
            <FaLinkedin />
          </a>
        </section>
      </div>

      <p>
        desenvolvido por Diego sales <FaCopyright />
      </p>
    </FooterStyle>
  );
};

export default Footer;
