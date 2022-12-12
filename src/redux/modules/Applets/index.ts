import { createSlice } from '@reduxjs/toolkit';
import { useAppSelector } from 'redux/store';

import { state as initialState } from './Applets.state';
import { AppletsSchema, PublishedApplet } from './Applets.schema';

import * as thunk from './Applets.thunk';
import { extraReducers } from './Applets.reducer';

const slice = createSlice({
  name: 'applets',
  initialState,
  reducers: {},
  extraReducers,
});

export const applets = {
  thunk,
  slice,
  actions: slice.actions,
  usePublishedApplets: (): AppletsSchema['publishedApplets']['data'] =>
    useAppSelector(
      ({
        applets: {
          publishedApplets: { data },
        },
      }) => data,
    ),
  usePublishedApplet: (id: string): PublishedApplet =>
    useAppSelector(
      ({
        applets: {
          publishedApplets: { data },
        },
      }) => data.find((applet: PublishedApplet) => applet.id === id),
    ),
  useAppletsContent: (): AppletsSchema['appletsContent']['data'] =>
    useAppSelector(
      ({
        applets: {
          applets: { data },
        },
      }) => data,
    ),
};
