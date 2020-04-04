import React from "react";
import styled from "styled-components";
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image";

const Container = styled.div`
  max-width: 1400px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  border: 1px solid blue;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const InputDiv = styled.div`
  width: 45%;
  border: 1px solid black;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const IntroDiv = styled.div`
  width: 45%;
  border: 1px solid red;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const PlaceDiv = styled.div`
  width: 45%;
  border: 1px solid red;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const ImgDiv = styled.div`
  width: 45%;
  border: 1px solid red;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Wrapper>
          <InputDiv>
            <input value="input box" onChange={() => {}} />
          </InputDiv>
          <IntroDiv>
            <ul>
              <li>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five
              </li>
              <li>
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
              </li>
              <li>
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </li>
            </ul>
          </IntroDiv>
        </Wrapper>
        <Wrapper>
          <PlaceDiv>
            <select>
              <option>place 1</option>
              <option>place 2</option>
              <option>place 3</option>
              <option>place 4</option>
            </select>
          </PlaceDiv>
          <ImgDiv>
            <h5>ref image</h5>

            <ResponsiveImage>
              <ResponsiveImageSize
                default
                minWidth={0}
                path={"https://via.placeholder.com/600"}
              />
              <ResponsiveImageSize
                minWidth={500}
                path={"https://via.placeholder.com/300"}
              />
              <ResponsiveImageSize
                minWidth={1200}
                path={"https://via.placeholder.com/500"}
              />
            </ResponsiveImage>
          </ImgDiv>
        </Wrapper>
      </Container>
    </div>
  );
}

export default App;
