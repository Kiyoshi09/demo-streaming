import { DataStore } from "aws-amplify"
import { Profile } from '../models';


export const SaveProfileApi = async ({email, name, isKids, isPrimary}) => {
  console.log(`SaveProfileApi : saving Profile Information to DataStore`);

  await DataStore.save(
    new Profile({
      email,
      name,
      isKids,
      isPrimary
    })
  );

  console.log(`Invoked SaveProfileApi : ${email}`);
}