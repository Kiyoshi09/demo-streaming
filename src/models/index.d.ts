import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerLikeList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LikeList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly contentsType: string;
  readonly contentsId: string;
  readonly profileID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLikeList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LikeList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly contentsType: string;
  readonly contentsId: string;
  readonly profileID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LikeList = LazyLoading extends LazyLoadingDisabled ? EagerLikeList : LazyLikeList

export declare const LikeList: (new (init: ModelInit<LikeList>) => LikeList) & {
  copyOf(source: LikeList, mutator: (draft: MutableModel<LikeList>) => MutableModel<LikeList> | void): LikeList;
}

type EagerWishList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WishList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly contentsType: string;
  readonly contentsId: string;
  readonly profileID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWishList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WishList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly contentsType: string;
  readonly contentsId: string;
  readonly profileID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WishList = LazyLoading extends LazyLoadingDisabled ? EagerWishList : LazyWishList

export declare const WishList: (new (init: ModelInit<WishList>) => WishList) & {
  copyOf(source: WishList, mutator: (draft: MutableModel<WishList>) => MutableModel<WishList> | void): WishList;
}

type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly isKids: boolean;
  readonly imagePath?: string | null;
  readonly isPrimary?: boolean | null;
  readonly WishLists?: (WishList | null)[] | null;
  readonly LikeLists?: (LikeList | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly isKids: boolean;
  readonly imagePath?: string | null;
  readonly isPrimary?: boolean | null;
  readonly WishLists: AsyncCollection<WishList>;
  readonly LikeLists: AsyncCollection<LikeList>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}