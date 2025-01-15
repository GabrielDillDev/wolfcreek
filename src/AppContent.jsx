import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import perfil from "./assets/perfil.jpg";
import capa from "./assets/capa.jpg";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rock+Salt&family=Oswald:wght@700&family=Anton&display=swap');
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #2e2e2e, #555);
  color: #fff;
  min-height: 100vh;
  padding: 20px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  background: linear-gradient(135deg, #333, #444);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
  position: relative;
`;

const CoverImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${capa});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${perfil});
  background-size: cover;
  background-position: center;
  border: 4px solid #fff;
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

const BandName = styled.h2`
  font-size: 30px;
  font-family: 'Rock Salt', cursive;
  font-weight: normal;
  margin: 60px 0 10px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Genre = styled.p`
  font-size: 20px;
  margin: 0px 0 20px 0; 
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  font-style: italic;
  letter-spacing: 1px;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 300px;
  margin: 10px auto;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  border: 2px solid #fff;
  font-family: 'Anton', sans-serif;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #444;
  }

  i {
    margin-right: 8px;
  }
`;

function AppContent() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <CoverImage>
            <Overlay />
          </CoverImage>
          <Logo />
          <BandName>Wolf Creek</BandName>
          <Genre>Hard Rock</Genre>
          <Button href="https://spotify.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-spotify"></i> Spotify
          </Button>
          <Button href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i> YouTube
          </Button>
          <Button href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </Button>
          <Button href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </Button>
        </Card>
      </Container>
    </>
  );
}

export default AppContent;
