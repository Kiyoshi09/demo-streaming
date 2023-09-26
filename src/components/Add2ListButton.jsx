import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Button } from '@aws-amplify/ui-react';
import { AiFillPlusCircle, AiFillCheckCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
// import { SaveWishListApi } from '../apis/SaveWishListApi';
// import { QueryWishListApi } from '../apis/QueryWishListApi';
// import { DeleteWishListApi } from '../apis/DeleteWishListApi';

const Add2ListButton = ({ videoId, contentsType }) => {
  const [addedList, setAddedList] = useState(false);
  const userprofile = useSelector((state) => {
    return state.userprofile;
  });

  const isAddedList = useCallback(async () => {
    const wishList = [];

    //** GraphQL の処理に変更する **

    // const wishList = await QueryWishListApi({
    //   profileId: userprofile.id,
    //   videoId
    // });

    if (wishList.length === 0) {
      setAddedList(false);
    } else {
      setAddedList(true);
    }
  }, [userprofile.id, videoId]);

  useEffect(() => {
    isAddedList();
  }, [isAddedList]);

  const handleClick = async (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    if (addedList) {
      //** GraphQL のｈ処理に変更する **/
      // // 削除
      // await DeleteWishListApi({
      //   "profileId": userprofile.id,
      //   videoId
      // });
    } else {
      //** GraphQL のｈ処理に変更する **/
      // // 追加
      // await SaveWishListApi({
      //   "profileId": userprofile.id,
      //   videoId,
      //   contentsType
      // });
    }

    setAddedList(!addedList);
  };

  return (
    <StyledButton onClick={handleClick}>
      {addedList ? (
        <>
          <AiFillCheckCircle size={20} />
          <StyledSpan>Added</StyledSpan>
        </>
      ) : (
        <>
          <AiFillPlusCircle size={20} />
          <StyledSpan>My List</StyledSpan>
        </>
      )}
    </StyledButton>
  );
};

export default Add2ListButton;

const StyledButton = styled(Button)`
  background-color: white;
  width: 120px;
`;

const StyledSpan = styled.span`
  padding-inline: 2px 2px;
`;
