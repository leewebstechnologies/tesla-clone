import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <BottomMenu>
        <a href="#">Tesla © 2023</a>
        <a href="#">Privacy & Legal</a>
        <a href="#">Vehicle Recalls</a>
        <a href="#">Contact</a>
        <a href="#">Careers</a>
        <a href="#">News</a>
        <a href="#">Engage</a>
        <a href="#">Location</a>
      </BottomMenu>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const BottomMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 400;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: flex;
    font-size: 8px;
    margin-right: 5px;
  }
`;
