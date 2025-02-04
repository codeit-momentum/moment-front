export interface FriendType {
  createdAt: string;
  fixedAt: string;
  isFixed: boolean;
  isKnock: boolean;
  nickname: string;
  profileImageUrl: string;
  userID: string;
}

export interface FeedType {
  feedId: number;
  image: string;
  name: string;
  content: string;
  date: string;
}

export interface MomentItemType {
  bucketContent: string;
  date: string;
  imageUrl: string;
  momentId: string;
  cheered: boolean;
}
