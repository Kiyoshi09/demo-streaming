import { DataStore } from "aws-amplify"
import { QueryWishListApi } from "./QueryWishListApi"

export const DeleteWishListApi = async ({profileId, videoId}) => {
  const wishList = await QueryWishListApi({
    profileId,
    videoId
  });

  if(wishList.length >= 1) {
    DataStore.delete(wishList[0]);
  }
}