import styled, { keyframes } from "styled-components";

const loaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }


  100% {
    transform: rotate(360deg) scale(1.3);
  }
`;

export const Preloader = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  border: 2px dashed red;
  animation-name: ${loaderAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
`;
