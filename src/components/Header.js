import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <a href="#">
        <img src="./images/tesla_logo.png" alt="Tesla Logo" />
      </a>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
