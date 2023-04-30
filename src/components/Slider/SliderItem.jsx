import React from "react";
import { StyledSliderItem } from "./styles";

export const SliderItem = ({slideMargin, visibleSlides, zoomFactor, slideClass, id, callback, callbackOut, children}) => {
  return (
    <StyledSliderItem
      zoomFactor={zoomFactor}
      slideMargin={slideMargin}
      visibleSlides={visibleSlides}
      className={slideClass}
      onMouseOver={() => callback(id)}
      onMouseOut={callbackOut}>
      {children}
    </StyledSliderItem>
  );
}