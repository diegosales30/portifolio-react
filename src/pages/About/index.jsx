import Header from "../../components/Header";
import logo1 from "../../assets/sobre.gif";
import { AboutStyle, Container } from "./style";
import Footer from "../../components/footer";

const About = () => {
  return (
    <Container>
      <Header />
      <AboutStyle>
        <div>
          <img src={logo1} alt="" />
        </div>
        <div>
          <h3>
            Olá, seja bem vindo ao meu Portofólio. meu nome é Diego Sales. Tenho
            30 anos e moro em Manaus. sou apaixonado pela natureza e curto tocar
            violão com os amigos. sou um apaixonado por Tecnologia, desde cedo
            sempre tive interesse e curiosidade sobre como as coisas funcionam.
            gosto muito estudar e desenvolver novas skills. hoje sou
            Desenvolvedor Front-end React Junior e procuro sobre novas
            oportunidades para me desenvolver profissionalmente.
          </h3>
        </div>
      </AboutStyle>
      <Footer />
    </Container>
  );
};

export default About;
