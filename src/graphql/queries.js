/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLikeList = /* GraphQL */ `
  query GetLikeList($id: ID!) {
    getLikeList(id: $id) {
      id
      contentsType
      contentsId
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const listLikeLists = /* GraphQL */ `
  query ListLikeLists(
    $filter: ModelLikeListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikeLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const likeListsByProfileID = /* GraphQL */ `
  query LikeListsByProfileID(
    $profileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likeListsByProfileID(
      profileID: $profileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getWishList = /* GraphQL */ `
  query GetWishList($id: ID!) {
    getWishList(id: $id) {
      id
      contentsType
      contentsId
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const listWishLists = /* GraphQL */ `
  query ListWishLists(
    $filter: ModelWishListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWishLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const wishListsByProfileID = /* GraphQL */ `
  query WishListsByProfileID(
    $profileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelWishListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    wishListsByProfileID(
      profileID: $profileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        isKids
        imagePath
        isPrimary
        WishLists {
          nextToken
        }
        LikeLists {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
