import React, { useState } from 'react';
import styled from 'styled-components';
import { View, Image, Loader, Text } from '@aws-amplify/ui-react';
import Modal from './Modal';

const VideoImageCard4MyList = ({videoId, type, imageBaseUrl, getDetailData, imageQuery, trailerQuery}) => {
  const { data: detailData, error: detailDataError, isFetching: isDetailDataFetching } = getDetailData(videoId);
  const { data: imageData, error: imageDataError, isFetching: isImageDataFetching } = imageQuery(videoId);
  const [ showModal, setShowModal ] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  let videoCardContent;
  let modal;

  if(isDetailDataFetching || isImageDataFetching) {
    videoCardContent = <Loader size='large' />;
  }
  else if(detailDataError || imageDataError) {
    videoCardContent = <Text as='p'>Error Loading...</Text>
  }
  else {
    let backdrop_path = "";
    const title = detailData.title ? detailData.title : detailData.name;
    const release_date = detailData.release_date ? detailData.release_date : detailData.first_air_date;

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
      videoCardContent = <StyledViewErrorImageContainer>
                          <StyledImageErrorCardContent 
                            alt='error video' 
                            src="https://www.kiyotaro.cloud/images/no_image_yoko.jpg" />
                          <StyledTextErrorImageTitle>{title}</StyledTextErrorImageTitle>
                        </StyledViewErrorImageContainer>
    }

    let genres = [];
    if(!isDetailDataFetching && !detailDataError) {
      if(detailData?.genres) {
        genres = detailData.genres;
      }
    }
  
    modal = <Modal 
                    onClose={handleClose} 
                    trailerQuery={trailerQuery}
                    videoId={videoId}
                    title={title}
                    vote_average={detailData.vote_average}
                    vote_count={detailData.vote_count}
                    release_date={release_date}
                    popularity={detailData.popularity}
                    overview={detailData.overview}
                    genres={genres}
                    type={type}
                  />
  }

  return (
    <>
      {videoCardContent}
      {
        showModal && modal
      }
    </>
  );
}

export default VideoImageCard4MyList;

const StyledImageCardContent = styled(Image)`
  max-width: 400px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 10px 10px 10px 1px #1f1f1f;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledViewErrorImageContainer = styled(View)`
  position: relative;
`;

const StyledImageErrorCardContent = styled(Image)`
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px 1px #1f1f1f;
`;

const StyledTextErrorImageTitle = styled(Text)`
  position: absolute;
  top: 20%;
  left: 0;
  font-family: 'Ubuntu';
  font-weight: 500;
  text-align: center;
`;
