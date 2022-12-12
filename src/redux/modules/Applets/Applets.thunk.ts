import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ApiError } from 'redux/modules';
import {
  AppletContent,
  getAppletContentApi,
  getPublishedAppletApi,
  getPublishedAppletsApi,
  PublishedApplet,
  PublishedApplets,
} from 'api';

export const getPublishedApplets = createAsyncThunk(
  'applets/getPublishedApplets',
  async (publishedApplets: PublishedApplets, { rejectWithValue, signal }) => {
    try {
      return await getPublishedAppletsApi(publishedApplets, signal);
    } catch (exception) {
      return rejectWithValue(exception as AxiosError<ApiError>);
    }
  },
);

export const getPublishedApplet = createAsyncThunk(
  'applets/getPublishedApplet',
  async (publishedApplet: PublishedApplet, { rejectWithValue, signal }) => {
    try {
      return await getPublishedAppletApi(publishedApplet, signal);
    } catch (exception) {
      return rejectWithValue(exception as AxiosError<ApiError>);
    }
  },
);

export const getAppletsContent = createAsyncThunk(
  'applets/getAppletsContent',
  async ({ libraryIds }: { libraryIds: string[] }, { rejectWithValue, dispatch }) => {
    try {
      return await Promise.allSettled(
        libraryIds.map((libraryId) => dispatch(getAppletContent({ libraryId }))),
      );
    } catch (exception) {
      return rejectWithValue(exception as AxiosError<ApiError>);
    }
  },
);

export const getAppletContent = createAsyncThunk(
  'applets/getAppletContent',
  async (appletContent: AppletContent, { rejectWithValue, signal }) => {
    try {
      return await getAppletContentApi(appletContent, signal);
    } catch (exception) {
      return rejectWithValue(exception as AxiosError<ApiError>);
    }
  },
);
