import React, { useState, useEffect, useRef } from 'react';
import { StyledSliderWrapper, StyledSlider, StyledButtonWrapper, StyledButton } from './styles';
import { SliderItem } from './SliderItem';

export const Slider = ({children, zoomFactor, slideMargin, maxVisibleSlides, pageTransition}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [transformValue, setTransformValue] = useState(`-${zoomFactor / 2}%`);
  const [windowWidth, setWindowWidth] = useState(0);
  const sliderRef = useRef(null);

  const numberOfSlides = (maxVisibleSlides, windowWidth) => {
    if (windowWidth > 1024) return maxVisibleSlides;
    if (windowWidth > 768) return 4;

    return 3;
  }

  const visibleSlides = numberOfSlides(maxVisibleSlides, windowWidth);
  const totalPages = Math.ceil(children.length / visibleSlides) - 1;

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      setWindowWidth(entries[0].contentRect.width);
    });

    resizeObserver.observe(sliderRef.current);
  }, [sliderRef]);

  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      if (currentPage > totalPages) setCurrentPage(totalPages);

      sliderRef.current.style.transform = `translate3D(-${ currentPage * windowWidth }px, 0, 0)`;
    }
  }, [sliderRef, currentPage, windowWidth, totalPages]);

  const disableHoverEffect = () => {
    if (sliderRef.current) sliderRef.current.style.pointEvents = "none";

    setTimeout(() => {
      if (sliderRef.current) sliderRef.current.style.pointEvents = "all";
    }, pageTransition);
  }

  const handleSlideMove = (forward) => {
    disableHoverEffect();
    setCurrentPage(currentPage + (forward ? 1 : -1));

    if (sliderRef.current)
      sliderRef.current.style.transform = `translate3D(-${
        (currentPage + (forward ? 1 : -1)) * windowWidth
      }px, 0, 0)`;
  };

  const handleMouseOver = (id) => {
    if (id % visibleSlides === 1) setTransformValue("0%"); /* left */
    if (id % visibleSlides === 0)
      setTransformValue(`-${zoomFactor}%`); /* right */
  };

  const handleMouseOut = () => {
    setTransformValue(`-${zoomFactor / 2}%`);
  };

  const assignSlideClass = (index, visibleSlides) => {
    const classes = ["right", "left"];

    return classes[index % visibleSlides] || "";
  };

  return (
    <StyledSliderWrapper zoomFactor={zoomFactor} visibleSlides={visibleSlides}>
      <StyledSlider
        visibleSlides={visibleSlides}
        transformValue={transformValue}
        zoomFactor={zoomFactor}
        slideMargin={slideMargin}
        pageTransition={pageTransition}
        ref={sliderRef}
      >
        {children.map((child, index) => (
          <SliderItem
            key={index}
            slideMargin={slideMargin}
            visibleSlides={visibleSlides}
            zoomFactor={zoomFactor}
            slideClass={assignSlideClass(index + 1, visibleSlides)}
            id={index + 1}
            callback={handleMouseOver}
            callbackOut={handleMouseOut}
          >
            {child}
          </SliderItem>
        ))}
      </StyledSlider>
      {currentPage > 0 && (
        /* バックボタン */
        <StyledButtonWrapper zoomFactor={zoomFactor} isForward={false}>
          <StyledButton
            isForward={false}
            onClick={() => handleSlideMove(false)}
          >
            &#8249;
          </StyledButton>
        </StyledButtonWrapper>
      )}
      {currentPage !== totalPages && (
        /* フォワードボタン */
        <StyledButtonWrapper zoomFactor={zoomFactor} isForward={true}>
          <StyledButton isForward={true} onClick={() => handleSlideMove(true)}>
            &#8250;
          </StyledButton>
        </StyledButtonWrapper>
      )}
    </StyledSliderWrapper>
  );
}