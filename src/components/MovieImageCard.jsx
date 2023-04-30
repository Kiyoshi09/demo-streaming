import React from 'react';
import styled from 'styled-components';
import { useGetMovieImageQuery } from '../redux/store/api/streamingApi';
import { Image, Loader, Text } from '@aws-amplify/ui-react';

const MovieImageCard = ({imageBaseUrl, movieId, title, vote_average, vote_count, release_date}) => {
  const { data, error, isFetching } = useGetMovieImageQuery(movieId);

  // console.log(`----(${movieId}) Image [[`);
  // console.log(data);
  // console.log('---- ]] Image');

  const handleClick = () => {
    console.log('backdropImage click...');
  }

  let movieCardContent;
  if(isFetching) {
    movieCardContent = <Loader size='large' />
  }
  else if (error) {
    movieCardContent = <Text as='p'>Error Loading...</Text>
  }
  else {
    if(data.backdrops[0]) {
      const backdrop_path = imageBaseUrl + 'original' + data.backdrops[0].file_path;
      movieCardContent = <StyledImageCardContent alt='movie' src={backdrop_path} onClick={handleClick}/>
    }
    else {
      movieCardContent = <StyledImageErrorCardContent alt='error movie' src="https://www.kiyotaro.cloud/images/no_image_yoko.jpg" style={{height: "85%"}}/>
    }
  }

  return (
    <>
      {movieCardContent}
    </>
  );
}

export default MovieImageCard;

const StyledImageCardContent = styled(Image)`
  min-width: 250px;
  cursor: pointer;
`;

const StyledImageErrorCardContent = styled(Image)`
  min-width: 250px;
`;
