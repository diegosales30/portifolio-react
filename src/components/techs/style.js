import styled from "styled-components";

export const Mytec = styled.div`
  text-align: center;
  margin: 30px;

  width: 100%;
  max-width: 1250px;

  min-width: 320px;
  margin: auto;

  h1 {
    margin: 30px;
    color: white;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 22px;
    }
  }
`;

export const BoxContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 700px;
  margin: auto;
  text-align: center;
  h4 {
    color: white;
  }
  section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div {
      margin: 15px;

      img {
        width: 185px;
        height: 180px;
        &:hover {
          border: 2px solid white;
          box-shadow: 0 0 10px black;
        }
      }
    }
    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      margin: auto;
      div {
        align-self: center;
      }
    }
    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;

      div {
        margin-right: 40%;
      }
    }
  }
`;
