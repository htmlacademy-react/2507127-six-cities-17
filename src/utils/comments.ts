import { ReviewComment } from '../types/comments';

function getSortedComments(comments: ReviewComment[], maxLength: number): ReviewComment[]{
  const sortedComments = comments.sort((commentA, commentB) => {
    const commentADate = new Date(commentA.date).getTime();
    const commentBDate = new Date(commentB.date).getTime();
    return commentBDate - commentADate;
  });
  return sortedComments.length >= 10
    ? sortedComments.slice(0, maxLength)
    : sortedComments;
}

function getFormattedDate(date: string): string{
  const commentDate = new Date(date);
  const month = commentDate.toLocaleString('en-US', { month: 'long' });
  return `${month} ${commentDate.getFullYear()}`;
}

export {getSortedComments, getFormattedDate};
