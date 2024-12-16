export type ReviewUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type ReviewComment = {
  id: string;
  date: string;
  user: ReviewUser;
  comment: string;
  rating: number;
}
