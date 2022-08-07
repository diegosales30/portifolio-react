import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

export const AboutStyle = styled.div`
  width: 100%;
  max-width: 1250px;

  min-width: 320px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div > img {
    margin-top: 50px;

    width: 80%;
  }

  div > h3 {
    color: var(--primary);
    font-size: 1.3rem;
    font-family: "Roboto Mono", monospace;
    max-width: 874px;
    min-width: 375px;
  }
`;
