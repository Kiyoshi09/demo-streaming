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
                          overview, 
                          type}) => {

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
    let backdrop_path = "";
    for(let i=0; i<imageData.backdrops.length; i++) {
      const backdrop = imageData.backdrops[i];

      if(backdrop["iso_639_1"]) {
        backdrop_path = backdrop["file_path"];
        break;
      }
    }

    if(backdrop_path) {
      backdrop_path = imageBaseUrl + 'original' + backdrop_path;
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
                  type={type}
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
