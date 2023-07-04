import styled from 'styled-components';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Flex, View, Loader, Text, Badge } from '@aws-amplify/ui-react';
import { AiFillCloseSquare } from 'react-icons/ai';
import YouTube from 'react-youtube';
import Add2ListButton from './Add2ListButton';
import LikeButton from './LikeButton';

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  }
}

const Modal = ({ onClose, trailerQuery, videoId, title, vote_average, vote_count, release_date, popularity, overview, genres, type }) => {
  const { data, error, isFetching } = trailerQuery(videoId);
  let releaseYear = release_date.split('-')[0];

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, []);

  const handleClose = () => {
    onClose();
  };

  // YouTube Events
  const handleReady = (video) => {
  }
  const handlePlay = (video) => {
  }
  const handlePause = (video) => {
  }
  const handleEnd = (video) => {
  }

  let trailerVideo;
  if (isFetching) {
    trailerVideo = 
                <StyledViewLoaderContainer>
                  <StyledLoader size='large' variation='linear'/>
                </StyledViewLoaderContainer>
  }
  else if (error) {
    trailerVideo = <StyledTextErrorMsg as='p'>Error Loading Trailer Video</StyledTextErrorMsg>
  }
  else {
    const youtubeVideoId = data.results[0]?.key;
    //console.log(`YoutubeVideo ID : ${youtubeVideoId}`);
    trailerVideo = 
                <StyledFlexContainer direction={{base: 'column', xl: 'row'}} alignItems="flex-start">
                  <StyledViewR1>
                    <YouTube 
                        videoId={ youtubeVideoId } 
                        opts={ opts } 
                        onReady={handleReady}
                        onPlay={handlePlay}
                        onPause={handlePause}
                        onEnd={handleEnd}
                    />
                  </StyledViewR1>
                  <StyledViewR2>
                    <StyledFlexVideoContainer direction='column' alignItems='flex-start' justifyContent='flex-start'>
                      <View>
                        <StyledTextVideoTitle>{title}</StyledTextVideoTitle>
                      </View>
                      <Flex direction='row' justifyContent='flex-start' alignItems='center'>
                        <StyledViewYear><p>{releaseYear}</p></StyledViewYear>
                        {
                          genres.map((genre) => (
                            <StyledBadge key={genre.id} size='small'>{genre.name}</StyledBadge>
                          ))
                        }
                      </Flex>
                      <View>
                        {
                          overview.length >= 300 ? overview.slice(0, 300) + '...' : overview
                        }
                      </View>
                      <StyledFlexButtonCotainer direction='row'>
                        <Add2ListButton videoId={videoId} contentsType={type} />
                        <LikeButton videoId={videoId} contentsType={type} />
                      </StyledFlexButtonCotainer>
                    </StyledFlexVideoContainer>
                  </StyledViewR2>
                </StyledFlexContainer>
  }

  return ReactDOM.createPortal(
    <View>
      <StyledViewBackground onClick={onClose}></StyledViewBackground>
      <StyledViewModal>
        <View>
          <StyledIconClose size={40} onClick={handleClose}/>
        </View>
        {trailerVideo}
      </StyledViewModal>
    </View>,
    document.querySelector('.modal-container')
  );
}

export default Modal;

const StyledViewBackground = styled(View)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 11;
`;

const StyledViewModal = styled(View)`
  position: fixed;
  inset: 0;
  width: 70vh;
  height: 390px;
  margin: auto;
  color: white;
  background-color: #171717e3;
  z-index: 12;

  @media screen and (min-width: 1280px){
    width: 1200px;
    height: 390px;
  }
`;

const StyledFlexContainer = styled(Flex)`
  position: relative;
`;

const StyledIconClose = styled(AiFillCloseSquare)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 99999;

  :hover {
    cursor: pointer;
  }
`;

const StyledTextErrorMsg = styled(Text)`
  font-size: 28px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: var(--amplify-colors-white);
  text-align: center;
`;

const StyledViewLoaderContainer = styled(View)`
  position: relative;
`;

const StyledLoader = styled(Loader)`
  position: absolute;
  top: 185px;
  width: 50%;
`;

const StyledViewR1 = styled(View)`
`;

const StyledViewR2 = styled(View)`
  width: 100%;
  height: 390px;
`;

const StyledFlexVideoContainer = styled(Flex)`
  position: relative;
  height: 100%;
  padding-block: 10px;
  padding-left: 30px;
`;

const StyledTextVideoTitle = styled(Text)`
  color: white;
  font-family: 'Ubuntu';
  font-size: 1.75rem;
  font-weight: 600;
  max-width: 400px;
`;

const StyledViewYear = styled(View)`
  width: 75px;
  padding: 2px 15px;
  margin: 0;
  border: solid 2px white;

  p {
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: 'Ubuntu';
  }
`;

const StyledBadge = styled(Badge)`
  border-radius: 1px;
`;

const StyledFlexButtonCotainer = styled(Flex)`
  position: absolute;
  bottom: 40px;
`;
