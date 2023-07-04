import React, { useState } from 'react';
import { View, Image, Loader, Text } from '@aws-amplify/ui-react';

const VideoImageCard4MyList = ({videoId, type, imageBaseUrl, getDetailData, imageQuery, trailerQuery}) => {
  const { data: detailData, error: detailDataError, isFetching: isDetailDataFetching } = getDetailData(videoId);
  const { data: imageData, error: imageDataError, isFetching: isImageDataFetching } = imageQuery(videoId);
  const [ showModal, setShowModal ] = useState(false);

  let videoCardContent;

  if(isDetailDataFetching || isImageDataFetching) {
    videoCardContent = <Loader size='large' />;
  }
  else if(detailDataError || imageDataError) {
    videoCardContent = <Text as='p'>Error Loading...</Text>
  }
  else {
    // console.log('detailData....');
    // console.log(detailData);
    // console.log('imageData....');
    // console.log(imageData);
    console.log(`videoId : ${videoId}`);
  }



  return (
    <>
      {videoCardContent}
    </>
  );
}

export default VideoImageCard4MyList;
