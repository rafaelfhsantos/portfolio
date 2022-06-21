import styled from "styled-components";

export const Button = styled.button`
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

export const P = styled.p``;

export const CardProjeto = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px dotted #aaa;
  padding: 20px;
  margin-bottom: 10px;
  a {
    color: #ccc;
    :hover {
      color: #fff;
    }
  }
`;

export const DivRepository = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  a:nth-child(2) {
    margin-left: 10px;
  }
`;
