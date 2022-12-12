import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { LeftBar } from 'components/LeftBar';
import { TopBar } from 'components/TopBar';
import { Footer } from 'layouts/Footer';
import { applets } from 'redux/modules/Applets';
import { useAppDispatch } from 'redux/store';

import { StyledBaseLayout, StyledCol } from './BaseLayout.styles';

export const BaseLayout = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () =>
      await dispatch(
        applets.thunk.getPublishedApplets({ recordsPerPage: 5, pageIndex: 0, searchText: '' }),
      ))();
  }, [dispatch]);

  return (
    <StyledBaseLayout>
      <LeftBar />
      <StyledCol>
        <TopBar />
        <Outlet />
        <Footer />
      </StyledCol>
    </StyledBaseLayout>
  );
};
