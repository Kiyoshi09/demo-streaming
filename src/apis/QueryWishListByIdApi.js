import { DataStore } from "aws-amplify"
import { WishList } from "../models"

export const QueryWishListByProfileIdApi = async ({profileId}) => {
  const wishLists = await DataStore.query(WishList, c => c.profileID.eq(profileId) );

  console.log(`profileId --> ${profileId}`);
  console.log(`Wish List : ${wishLists.length}`);

  return wishLists;
}