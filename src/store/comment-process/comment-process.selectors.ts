import { NameSpace } from '../../const';
import { ReviewComment } from '../../types/comments';
import { State } from '../../types/state';

export const selectOfferComments = (state: State): ReviewComment[] | null => state[NameSpace.Comment].offerComments;

export const selectIsCommentsLoading = (state: State): boolean => state[NameSpace.Comment].isCommentsLoading;
export const selectIsCommentAdding = (state: State): boolean => state[NameSpace.Comment].isCommentAdding;
