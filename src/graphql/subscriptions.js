/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLikeList = /* GraphQL */ `
  subscription OnCreateLikeList($filter: ModelSubscriptionLikeListFilterInput) {
    onCreateLikeList(filter: $filter) {
      id
      contentsType
      contentsId
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLikeList = /* GraphQL */ `
  subscription OnUpdateLikeList($filter: ModelSubscriptionLikeListFilterInput) {
    onUpdateLikeList(filter: $filter) {
      id
      contentsType
      contentsId
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLikeList = /* GraphQL */ `
  subscription OnDeleteLikeList($filter: ModelSubscriptionLikeListFilterInput) {
    onDeleteLikeList(filter: $filter) {
      id
      contentsType
      contentsId
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWishList = /* GraphQL */ `
  subscription OnCreateWishList($filter: ModelSubscriptionWishListFilterInput) {
    onCreateWishList(filter: $filter) {
      id
      contentsType
      contentsId
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWishList = /* GraphQL */ `
  subscription OnUpdateWishList($filter: ModelSubscriptionWishListFilterInput) {
    onUpdateWishList(filter: $filter) {
      id
      contentsType
      contentsId
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWishList = /* GraphQL */ `
  subscription OnDeleteWishList($filter: ModelSubscriptionWishListFilterInput) {
    onDeleteWishList(filter: $filter) {
      id
      contentsType
      contentsId
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onCreateProfile(filter: $filter) {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onUpdateProfile(filter: $filter) {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
    onDeleteProfile(filter: $filter) {
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
