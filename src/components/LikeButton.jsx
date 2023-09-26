import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Button } from '@aws-amplify/ui-react';
import { AiFillLike, AiFillHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
// import { SaveLikeListApi } from '../apis/SaveLikeListApi';
// import { QueryLikeListApi } from '../apis/QueryLikeListApi';
// import { DeleteLikeListApi } from '../apis/DeleteLikeListApi';

const LikeButton = ({ videoId, contentsType }) => {
  const [isLiked, setIsLiked] = useState(false);
  const userprofile = useSelector((state) => {
    return state.userprofile;
  });

  const isLikedList = useCallback(async () => {
    const likeList = [];
    // ** GraphQL の処理に変更する **/
    // const likeList = await QueryLikeListApi({
    //   profileId: userprofile.id,
    //   videoId
    // });

    if (likeList.length === 0) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  }, [userprofile.id, videoId]);

  useEffect(() => {
    isLikedList();
  }, [isLikedList]);

  const handleClick = async (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    if (isLiked) {
      // ** GraphQL の処理に変更する **/
      // // 削除
      // await DeleteLikeListApi({
      //   "profileId": userprofile.id,
      //   videoId
      // });
    } else {
      // ** GraphQL の処理に変更する **/
      //   // 追加
      //   await SaveLikeListApi({
      //     "profileId": userprofile.id,
      //     videoId,
      //     contentsType
      //   });
    }

    setIsLiked(!isLiked);
  };

  return (
    <StyledButton onClick={handleClick}>
      {isLiked ? (
        <>
          <AiFillHeart size={20} />
          <StyledSpan>Liked</StyledSpan>
        </>
      ) : (
        <>
          <AiFillLike size={20} />
          <StyledSpan>Like</StyledSpan>
        </>
      )}
    </StyledButton>
  );
};

export default LikeButton;

const StyledButton = styled(Button)`
  background-color: white;
  width: 120px;
`;

const StyledSpan = styled.span`
  padding-inline: 2px 2px;
`;
