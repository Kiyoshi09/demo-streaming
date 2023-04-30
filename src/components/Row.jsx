import React from 'react';
import styled from 'styled-components';
import { Loader, Text, View } from '@aws-amplify/ui-react';
import MovieImageCard from './MovieImageCard';
import { Slider } from './Slider/Slider';

const SliderProps = {
  zoomFactor: 30 /* ホバー時にどれくらいズームするか */,
  slideMargin: 5 /* スライド間の余白 */,
  maxVisibleSlides: 5 /* 1ページあたりのスライド枚数*/,
  pageTransition: 500 /* 次のページへの推移速度 */,
};

const Row = ({apiConfig, title, getData}) => {
  const { data, error, isFetching } = getData();
  const imgBaseUrl = apiConfig.images.secure_base_url;

  return (
    <StyledViewRow>
      <StyledTextTitle as='p'>{title}</StyledTextTitle>
      {
        isFetching && <Loader size='large' variation='linear' />
      }
      {
        error && <StyledTextErrorMsg as='p'>Error Loading Popular Movies</StyledTextErrorMsg>
      }
      {
        !isFetching && !error && 
          <Slider {...SliderProps}>
            {
              data.results.map((movie) => (
                <View key={movie.id}>
                  <MovieImageCard 
                    imageBaseUrl={imgBaseUrl} 
                    movieId={movie.id} 
                    title={movie.title}
                    vote_average={movie.vote_average}
                    vote_count={movie.vote_count}
                    release_date={movie.release_date}
                  />
                </View> 
              ))
            }
          </Slider>
      }
    </StyledViewRow>
  );
}

export default Row;

const StyledViewRow = styled(View)`
  position: relative;
  margin: 30px 30px 30px 30px;
`;

const StyledTextTitle = styled(Text)`
  font-size: 28px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: var(--amplify-colors-white);
  text-align: left;
  margin-block: 10px;
`;

const StyledTextErrorMsg = styled(Text)`
  font-size: 28px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: var(--amplify-colors-white);
  text-align: center;
`;
