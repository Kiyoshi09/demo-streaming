import React, { useState } from 'react';
import styled from 'styled-components';
import { Image, Loader, Text } from '@aws-amplify/ui-react';
import Modal from './Modal';

const VideoImageCard = ({imageQuery, 
                          trailerQuery, 
                          imageBaseUrl, 
                          getDetailData,
                          videoId, 
                          title, 
                          vote_average, 
                          vote_count, 
                          release_date, 
                          popularity, 
                          overview}) => {

  const { data: imageData, error: imageDataError, isFetching: isImageDataFetching } = imageQuery(videoId);
  const { data: detailData, error: detailDataError, isFetching: isDetailDataFetching } = getDetailData(videoId);
  const [ showModal, setShowModal ] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  let videoCardContent;
  if(isImageDataFetching) {
    videoCardContent = <Loader size='large' />
  }
  else if (imageDataError) {
    videoCardContent = <Text as='p'>Error Loading...</Text>
  }
  else {
    if(imageData.backdrops[0]) {
      const backdrop_path = imageBaseUrl + 'original' + imageData.backdrops[0].file_path;
      videoCardContent = <StyledImageCardContent alt='video' src={backdrop_path} onClick={handleClick}/>
    }
    else {
      videoCardContent = <StyledImageErrorCardContent 
                            alt='error video' 
                            src="https://www.kiyotaro.cloud/images/no_image_yoko.jpg" 
                            style={{height: "85%"}}/>
    }
  }

  let genres = [];
  if(!isDetailDataFetching && !detailDataError) {
    if(detailData?.genres) {
      genres = detailData.genres;
    }
  }

  const modal = <Modal 
                  onClose={handleClose} 
                  trailerQuery={trailerQuery}
                  videoId={videoId}
                  title={title}
                  vote_average={vote_average}
                  vote_count={vote_count}
                  release_date={release_date}
                  popularity={popularity}
                  overview={overview}
                  genres={genres}
                />

  return (
    <>
      {videoCardContent}
      {
        showModal && modal
      }
    </>
  );
}

export default VideoImageCard;

const StyledImageCardContent = styled(Image)`
  min-width: 250px;
  cursor: pointer;
`;

const StyledImageErrorCardContent = styled(Image)`
  min-width: 250px;
`;
