// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LikeList, WishList, Profile } = initSchema(schema);

export {
  LikeList,
  WishList,
  Profile
};