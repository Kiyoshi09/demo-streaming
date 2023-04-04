import { DataStore } from "aws-amplify"
import { Profile } from "../models"

export const QueryProfileByEmailApi = async (email) => {
  const profiles = await DataStore.query(Profile,  (p) => p.email.eq(email));

  return profiles;
}