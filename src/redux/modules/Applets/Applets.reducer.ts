import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AppletsSchema } from './Applets.schema';
import { getAppletsContent, getPublishedApplets } from './Applets.thunk';
import { state as initialState } from './Applets.state';

import { ErrorResponse } from '../Base';

export const extraReducers = (builder: ActionReducerMapBuilder<AppletsSchema>): void => {
  builder.addCase(getPublishedApplets.pending, ({ publishedApplets }, action) => {
    if (publishedApplets.status !== 'loading') {
      publishedApplets.requestId = action.meta.requestId;
      publishedApplets.status = 'loading';
    }
  });

  builder.addCase(getPublishedApplets.fulfilled, ({ publishedApplets }, action) => {
    if (
      publishedApplets.status === 'loading' &&
      publishedApplets.requestId === action.meta.requestId
    ) {
      publishedApplets.requestId = initialState.publishedApplets.requestId;
      publishedApplets.status = 'success';
      publishedApplets.data = action.payload.data;
    }
  });

  builder.addCase(getPublishedApplets.rejected, ({ publishedApplets }, action) => {
    if (
      publishedApplets.status === 'loading' &&
      publishedApplets.requestId === action.meta.requestId
    ) {
      const error = action.payload as AxiosError;
      publishedApplets.requestId = initialState.publishedApplets.requestId;
      publishedApplets.status = 'error';
      publishedApplets.error = error.response?.data as AxiosError<ErrorResponse>;
    }
  });

  builder.addCase(getAppletsContent.pending, ({ appletsContent }, action) => {
    if (appletsContent.status !== 'loading') {
      appletsContent.requestId = action.meta.requestId;
      appletsContent.status = 'loading';
    }
  });

  builder.addCase(getAppletsContent.fulfilled, ({ appletsContent }, action) => {
    if (appletsContent.status === 'loading' && appletsContent.requestId === action.meta.requestId) {
      appletsContent.requestId = initialState.appletsContent.requestId;
      appletsContent.status = 'success';
      appletsContent.data = action.payload;
    }
  });

  builder.addCase(getAppletsContent.rejected, ({ appletsContent }, action) => {
    if (appletsContent.status === 'loading' && appletsContent.requestId === action.meta.requestId) {
      const error = action.payload as AxiosError;
      appletsContent.requestId = initialState.appletsContent.requestId;
      appletsContent.status = 'error';
      appletsContent.error = error.response?.data as AxiosError<ErrorResponse>;
    }
  });
};
