import { SiHomebridge } from "react-icons/si";
import { HeaderStyle, Logo, Nav } from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  const handleNavigation = (path) => {
    return navigation(path);
  };
  return (
    <>
      <HeaderStyle>
        <Logo>
          <SiHomebridge onClick={() => handleNavigation("/")} />
        </Logo>
        <>
          <Nav>
            <li onClick={() => handleNavigation("/")}>Sobre</li>
            <li onClick={() => handleNavigation("/technology")}>Tecnologias</li>
            <li>Projetos</li>
            <li>Fale Comigo</li>
          </Nav>
        </>
      </HeaderStyle>
    </>
  );
};

export default Header;
