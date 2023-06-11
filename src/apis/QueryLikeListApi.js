import { DataStore } from "aws-amplify"
import { LikeList } from "../models"

export const QueryLikeListApi = async ({ profileId, videoId }) => {

  const likeList = await DataStore.query(LikeList, (c) => c.and(c => [
    c.profileID.eq(profileId),
    c.contentsId.eq(String(videoId))
  ]));

  return likeList;
}