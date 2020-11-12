import React from "react";
// style
import styled from "styled-components";
// responsive
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image";

// big container grey
const Container = styled.div`
  max-width: 1400px;
  border: 1px solid #ccc;
  padding: 10px;
`;

const Wrapper = styled.div`
  // real flex
  display: flex;

  // fit to container
  width: 100%;

  // border
  border: 1px solid blue;

  // full screen mode, space
  justify-content: space-between;

  // mobile mode, column
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

// * child under flex parent
const InputDiv = styled.div`
  // full screen mode
  width: 45%;
  border: 1px solid red;
  // mobile mode
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

// * child under flex parent
const IntroDiv = styled.div`
  // full screen mode
  width: 45%;
  border: 1px solid red;
  // mobile mode
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

// * this one cross up
// * green border
const PlaceDiv = styled.div`
  margin-top: -10rem;
  width: 45%;
  border: 1px solid green;
  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 0px;
  }
`;

// * green border
const ImgDiv = styled.div`
  width: 45%;
  border: 1px solid green;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

// * this one cross up
// * orange border
const OtherDiv = styled.div`
  margin-top: -43rem;
  width: 45%;
  border: 1px solid orange;
  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 0;
  }
`;

const OtherDivWrapper = styled.div`
  margin-bottom: 10px;
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
            {/*<div style={{ height: "200px" }}>
              <img
                src="https://via.placeholder.com/600x200"
                alt=""
                style={{ width: "100%", maxHeight: "100%" }}
              />
            </div>*/}
            <div style={{ width: "200px" }}>
              <img
                src="https://via.placeholder.com/600x200"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </ImgDiv>
        </Wrapper>
        <Wrapper>
          <OtherDiv>
            <OtherDivWrapper>
              <input value="input box 2" onChange={() => {}} />
            </OtherDivWrapper>
            <OtherDivWrapper>
              <input value="input box 3 " onChange={() => {}} />
            </OtherDivWrapper>
            <OtherDivWrapper>
              <input value="input box 4" onChange={() => {}} />
            </OtherDivWrapper>
          </OtherDiv>
        </Wrapper>
      </Container>
    </div>
  );
}

export default App;
