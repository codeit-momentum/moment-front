type NoticeType = 'KNOCK' | 'FRIEND' | 'CHEER';

export interface MomentItemType {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface NoticeItemType {
  content: string;
  createdAt: string;
  isRead: boolean;
  notificationID: string;
  type: NoticeType;
}
