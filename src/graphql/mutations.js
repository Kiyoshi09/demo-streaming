/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLikeList = /* GraphQL */ `
  mutation CreateLikeList(
    $input: CreateLikeListInput!
    $condition: ModelLikeListConditionInput
  ) {
    createLikeList(input: $input, condition: $condition) {
      id
      contentsType
      contentsId
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const updateLikeList = /* GraphQL */ `
  mutation UpdateLikeList(
    $input: UpdateLikeListInput!
    $condition: ModelLikeListConditionInput
  ) {
    updateLikeList(input: $input, condition: $condition) {
      id
      contentsType
      contentsId
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const deleteLikeList = /* GraphQL */ `
  mutation DeleteLikeList(
    $input: DeleteLikeListInput!
    $condition: ModelLikeListConditionInput
  ) {
    deleteLikeList(input: $input, condition: $condition) {
      id
      contentsType
      contentsId
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const createWishList = /* GraphQL */ `
  mutation CreateWishList(
    $input: CreateWishListInput!
    $condition: ModelWishListConditionInput
  ) {
    createWishList(input: $input, condition: $condition) {
      id
      contentsType
      contentsId
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const updateWishList = /* GraphQL */ `
  mutation UpdateWishList(
    $input: UpdateWishListInput!
    $condition: ModelWishListConditionInput
  ) {
    updateWishList(input: $input, condition: $condition) {
      id
      contentsType
      contentsId
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const deleteWishList = /* GraphQL */ `
  mutation DeleteWishList(
    $input: DeleteWishListInput!
    $condition: ModelWishListConditionInput
  ) {
    deleteWishList(input: $input, condition: $condition) {
      id
      contentsType
      contentsId
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      email
      name
      isKids
      imagePath
      isPrimary
      WishLists {
        items {
          id
          contentsType
          contentsId
          profileID
          createdAt
          updatedAt
        }
        nextToken
      }
      LikeLists {
        items {
          id
          contentsType
          contentsId
          profileID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      email
      name
      isKids
      imagePath
      isPrimary
      WishLists {
        items {
          id
          contentsType
          contentsId
          profileID
          createdAt
          updatedAt
        }
        nextToken
      }
      LikeLists {
        items {
          id
          contentsType
          contentsId
          profileID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      email
      name
      isKids
      imagePath
      isPrimary
      WishLists {
        items {
          id
          contentsType
          contentsId
          profileID
          createdAt
          updatedAt
        }
        nextToken
      }
      LikeLists {
        items {
          id
          contentsType
          contentsId
          profileID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
