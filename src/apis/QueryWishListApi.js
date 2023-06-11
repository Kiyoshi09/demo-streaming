import { DataStore } from "aws-amplify"
import { WishList } from "../models"

export const QueryWishListApi = async ({ profileId, videoId }) => {

  const wishList = await DataStore.query(WishList, (c) => c.and(c => [
    c.profileID.eq(profileId),
    c.contentsId.eq(String(videoId))
  ]));

  return wishList;
}