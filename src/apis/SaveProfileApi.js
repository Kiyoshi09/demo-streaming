import { DataStore } from "aws-amplify"
import { Profile } from '../models';


export const SaveProfileApi = async ({email, name, isKids, isPrimary}) => {
  await DataStore.save(
    new Profile({
      email,
      name,
      isKids,
      isPrimary
    })
  );
}