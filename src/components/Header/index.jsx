import { VscGithubInverted } from "react-icons/vsc";
import { SiHomebridge } from "react-icons/si";
import { HeaderStyle, Logo, Nav } from "./style";

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <Logo>
          <SiHomebridge />
        </Logo>
        <>
          <Nav>
            <li>Sobre</li>
            <li>Tecnologias</li>
            <li>Projetos</li>
            <li>Fale Comigo</li>
          </Nav>
        </>
      </HeaderStyle>
    </>
  );
};

export default Header;
