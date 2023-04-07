import { DataStore } from "aws-amplify"
import { Profile } from "../models"

export const DeleteProfileByNameApi = async (email, name) => {
  const profiles = await DataStore.query(Profile,  (p) => p.email.eq(email));

  const toDelete = profiles.filter((profile) => {
    return profile.name === name;
  })

  DataStore.delete(toDelete[0]);
}