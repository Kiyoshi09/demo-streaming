import styled from "styled-components";
import { StyledSliderItem } from "typescript";

export const StyledSliderWrapper = styled.div`
  ${({ zoomFactor, visibleSlides }) => `
    overflow: hidden;
    position: relative;
    background: transparent;
    top: -30px;
    padding: ${(zoomFactor / visibleSlides) * 0.3 + "%"} 0;
  `}
`;

export const StyledSlider = styled.div`
  ${({ pageTransition, transformValue }) => `
    display: flex;
    transition: transform ${pageTransition}ms ease;

    :hover ${StyledSliderItem} {
      transform: translateX(${transformValue})
    }
  `}
`;

export const StyledButtonWrapper = styled.div`
  ${({ isForward, zoomFactor }) => `
    position: absolute;
    border-radius: ${isForward ? "0.5vw 0 0 0.5vw" : "0 0.5vw 0.5vw 0"};
    box-sizing: border-box;
    top: 45px;
    width: 40px;
    height: 100px;
    ${isForward ? "right: 0;" : "left: 0;"};

    @media screen and (min-width: 1376px) {
      top: 20%;
      width: 50px;
      height: 45%;
    }

  `}
`;

export const StyledButton = styled.button`
  ${({ isForward }) => `
      display: block;
      background: rgb(0, 0, 0, 0.7);
      border: 0;
      border-radius: ${isForward ? "0.5vw 0 0 0.5vw" : "0 0.5vw 0.5vw 0"};
      top: 0;
      ${isForward ? "right: 0;" : "left: 0;"};
      width: 100%;
      height: 100%;
      color: #fff;
      font-size: 3rem;
      font-weight: 800;
      cursor: pointer;
      outline: none;
      transition: all 0.7s;
      user-select: none;

      :hover {
        opacity: 0.5;
      }
    `}
`;