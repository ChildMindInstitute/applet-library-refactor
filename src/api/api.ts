import { apiClient } from './api.client';
import { PublishedApplets, AppletContent, PublishedApplet } from './api.types';

export const getPublishedAppletsApi = (
  { recordsPerPage, pageIndex, searchText }: PublishedApplets,
  signal?: AbortSignal,
) =>
  apiClient.get('/library/applets', {
    params: {
      recordsPerPage,
      pageIndex,
      searchText,
    },
    signal,
  });

export const getPublishedAppletApi = ({ libraryId }: PublishedApplet, signal?: AbortSignal) =>
  apiClient.get('/library/applet', { params: { libraryId }, signal });

export const getAppletContentApi = (
  { libraryId, appletId }: AppletContent,
  signal?: AbortSignal,
) => {
  const url = '/library/applet/content';
  const params = {
    libraryId,
    ...(appletId ? { nextActivity: appletId } : {}),
  };

  return apiClient.get(url, { params, signal });
};
