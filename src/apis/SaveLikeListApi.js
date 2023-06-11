import { DataStore } from "aws-amplify"
import { LikeList } from '../models';

export const SaveLikeListApi = async ({profileId, videoId, contentsType}) => {

  await DataStore.save(
    new LikeList({
      "profileID": profileId,
      "contentsId": String(videoId),
      "contentsType": contentsType
    })
  );

}