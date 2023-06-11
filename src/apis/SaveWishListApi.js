import { DataStore } from "aws-amplify"
import { WishList } from '../models';

export const SaveWishListApi = async ({profileId, videoId, contentsType}) => {

  await DataStore.save(
    new WishList({
      "profileID": profileId,
      "contentsId": String(videoId),
      "contentsType": contentsType
    })
  );

}