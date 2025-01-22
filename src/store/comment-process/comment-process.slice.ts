import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CommentProcess } from '../../types/state';
import { fetchOfferCommentsAction, postOfferCommentAction } from '../api-actions';
import { toast } from 'react-toastify';

const initialState: CommentProcess = {
  offerComments: [],

  isCommentsLoading: false,
  isCommentAdding: false,
};

export const commentProcess = createSlice({
  name: NameSpace.Comment,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchOfferCommentsAction.pending, (state) => {
        state.isCommentsLoading = true;
      })
      .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
        state.offerComments = action.payload;
        state.isCommentsLoading = false;
      })
      .addCase(fetchOfferCommentsAction.rejected, (state) => {
        state.isCommentsLoading = false;
      })

      .addCase(postOfferCommentAction.pending, (state) => {
        state.isCommentAdding = true;
      })
      .addCase(postOfferCommentAction.fulfilled, (state, action) => {
        state.offerComments.push(action.payload);
        toast.success('Comment successfully added');
        state.isCommentAdding = false;
      })
      .addCase(postOfferCommentAction.rejected, (state) => {
        state.isCommentAdding = false;
      });
  }
});
