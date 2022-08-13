import styled from "styled-components";

export const Main = styled.html`
  background-color: ${(props) => (props.day ? "#fefefe" : "#444")};
  height: 100%;
`;

export const FixedMenu = styled.div`
  top: 0px;
  height: 70px;
  display: flex;
  z-index: 100;
  position: fixed;
  background-color: ${(props) => (props.day ? "#fefefe" : "#444")};
  box-shadow: ${(props) =>
    props.day
      ? "0px 1px 5px 0px rgba(0, 0, 0, 0.5)"
      : "0px 1px 5px 0px rgba(200, 200, 200, 0.5)"};
  /* box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5); */
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const SunMoon = styled.img`
  width: 250px;
  height: 250px;
  /* -webkit-transform-origin-z: -10px;
  position: absolute; */

  rotate: ${(props) => (props.day ? "calc(0deg)" : "calc(180deg)")};
  transition: rotate 2s;
  border-radius: 50%;
  &:hover {
    box-shadow: 0px 0px 10px 10px #555;
    /* rotate: calc(180deg); */
  }
  @media (max-width: 720px) {
    width: 100px;
    height: 100px;
    top: -50px;
  }
`;

export const TopButton = styled.button`
  background-color: ${(props) => (props.day ? "#f0f0f0" : "#555")};
  color: ${(props) => (props.day ? "#222" : "#ddd")};
  height: 50px;
  border: none;
  border-radius: 50px;
  padding: 5px 20px;
  font-size: 18px;
  /* margin-bottom: 50px; */
  transition: background-color 1s, color 1s;
  &:hover {
    /* background-color: #f00;
    color: #fff; */
    cursor: pointer;
    box-shadow: 0px 0px 10px 2px ${(props) => (props.day ? "#222" : "#999")};
  }
`;

export const ThemeButton = styled.button`
  background-color: ${(props) => (props.day ? "#f0f0f0" : "#555")};
  color: ${(props) => (props.day ? "#222" : "#ddd")};
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  font-size: 100px;
  border-radius: 50%;
  &:hover {
    color: red;
    cursor: pointer;
    background-color: ${(props) => (props.day ? "#ddd" : "#111")};
    box-shadow: 0px 0px 10px 2px ${(props) => (props.day ? "#222" : "#999")};
  }
`;

export const Button = styled.button`
  transition: background-color 1s, color 1s;
  height: 50px;
  border: none;
  border-radius: 50px;
  padding: 5px 20px;
  font-size: 18px;
  margin-bottom: 50px;
  &:hover {
    background-color: #f00;
    color: #fff;
    cursor: pointer;
    box-shadow: 0px 0px 10px 2px #555;
  }
`;

export const DivSobre = styled.div`
  background-color: ${(props) => (props.day ? "#f0f0f0" : "#555")};
  padding: 80px 10px 0px 10px;
  height: auto;
  box-sizing: border-box;
  @media (min-width: 720px) {
    padding: 80px 0 80px 80px;
  }
`;

export const P = styled.p`
  color: ${(props) => (props.day ? "#222" : "#ddd")};
  text-align: center;
`;

export const DivTechs = styled.div`
  display: flex;
`;

export const PTech = styled.p`
  display: inline-flex;
  background-color: #bbb;
  color: #511;
  padding: 5px;
  border-radius: 5px;
  align-items: center;
  margin-left: 5px;
`;

export const DivProjetos = styled.div`
  background-color: ${(props) => (props.day ? "#f0f0f0" : "#555")};
  @media (min-width: 720px) {
    padding: 0 80px;
  }

  @media (min-width: 1440px) {
    padding: 0 300px;
  }
`;

export const CardProjeto = styled.article`
  background-color: ${(props) => (props.day ? "#f0f0f0" : "#444")};
  color: ${(props) => (props.day ? "#222" : "#ddd")};
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px dotted #aaa;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 10px;
  a {
    background-color: ${(props) => (props.day ? "#f0f0f0" : "#444")};
    color: ${(props) => (props.day ? "#222" : "#ddd")};
    border: 1px solid ${(props) => (props.day ? "#444" : "#ddd")};
    border-radius: 15px;
    padding: 5px 10px;
    text-decoration: none;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    :hover {
      color: ${(props) => (props.day ? "#000" : "#EEE")};
      border-color: ${(props) => (props.day ? "#000" : "#fff")};
      background-color: ${(props) => (props.day ? "#ddd" : "#333")};
    }
    p:nth-child(even) {
      margin-left: 5px;
    }
    p {
      margin: 0;
    }
  }
  &:first-of-type {
    margin-top: 60px;
  }

  @media (max-width: 720px) {
    border-radius: 0px;
  }
`;

export const DivRepository = styled.div`
  display: flex;
  /* align-items: flex-end; */
  justify-content: center;
  align-items: center;
  a:nth-child(2) {
    margin-left: 10px;
  }
`;
