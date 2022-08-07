import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  max-width: 1250px;
  /* border-bottom: 1px var(--secondary) solid; */

  height: 100px;
  min-width: 320px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  margin-left: 20px;
  font-size: 2.5rem;
  cursor: pointer;
  color: var(--primary);
  :hover {
    margin-bottom: 2px;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  list-style: none;
  color: var(--primary);
  li {
    margin-right: 25px;
    cursor: pointer;
    :hover {
      margin-bottom: 10px;
      font-size: 1.1rem;
    }
  }
`;
