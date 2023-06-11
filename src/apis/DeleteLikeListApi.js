import { DataStore } from "aws-amplify"
import { QueryLikeListApi } from "./QueryLikeListApi"

export const DeleteLikeListApi = async ({profileId, videoId}) => {
  const likeList = await QueryLikeListApi({
    profileId,
    videoId
  });

  if(likeList.length >= 1) {
    DataStore.delete(likeList[0]);
  }
}