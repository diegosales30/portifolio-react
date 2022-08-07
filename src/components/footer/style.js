import styled from "styled-components";

export const FooterStyle = styled.div`
  width: 100%;
  max-width: 1250px;
  /* border-top: 1px var(--secondary) solid; */
  margin-top: 30px !important;

  height: 100%;
  min-width: 320px;
  margin: auto;
  display: flex;
  flex-direction: column;

  align-items: center;
  div {
    margin-top: 50px;
    cursor: pointer;
    color: var(--primary);
    font-size: 2.5rem;

    width: 100%;

    section {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        :active {
          color: var(--quartenary);
        }
        :link {
          color: var(--quartenary);
        }
        :visited {
          color: var(--primary);
        }
        margin-left: 50px;
        :hover {
          font-size: 2.3rem;
        }
      }
    }
  }
  p {
    margin-top: 30px;
    font-size: x-small;
    color: var(--primary);
  }
`;
