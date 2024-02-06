import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Main from "../components/Main";

const Home = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Footer = styled.div``;
export default Home;
