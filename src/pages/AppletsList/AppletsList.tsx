import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'redux/store';
import { applets, breadcrumbs } from 'redux/modules';
import { Search } from 'components/Search';
import { AppletItem } from 'components/AppletItem/AppletItem';
import { useBaseBreadcrumbs } from 'hooks';
import { StyledBody } from 'styles/styledComponents/Body';

import { DEFAULT_RECORDS_PER_PAGE } from './AppletsList.const';
import { StyledAppletsList, StyledHeader, StyledTablePagination } from './AppletsList.styles';

export const AppletsList = (): JSX.Element => {
  const { t } = useTranslation('app');
  const dispatch = useAppDispatch();
  const publishedApplets = applets.usePublishedApplets();
  const baseBreadcrumbs = useBaseBreadcrumbs();

  const [pageIndex, setPageIndex] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(DEFAULT_RECORDS_PER_PAGE);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (baseBreadcrumbs && baseBreadcrumbs.length > 0) {
      dispatch(breadcrumbs.actions.setBreadcrumbs(baseBreadcrumbs));
    }
  }, [baseBreadcrumbs, dispatch]);

  const handleSearch = (searchText: string) => {
    setSearchText(searchText);
    setPageIndex(0);
    dispatch(applets.thunk.getPublishedApplets({ recordsPerPage, pageIndex: 0, searchText }));
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPageIndex(newPage);
    dispatch(applets.thunk.getPublishedApplets({ recordsPerPage, pageIndex: newPage, searchText }));
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRecordsPerPage(parseInt(event.target.value, 10));
    setPageIndex(0);
  };

  return (
    <StyledBody>
      <StyledHeader>
        <Search placeholder={t('searchAppletLibrary')} onSearch={handleSearch} />
        <StyledTablePagination
          component="div"
          count={publishedApplets?.totalCount || 0}
          rowsPerPage={recordsPerPage}
          page={pageIndex}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage=""
          rowsPerPageOptions={[]}
        />
      </StyledHeader>
      <StyledAppletsList>
        {publishedApplets?.data.map((applet) => (
          <AppletItem key={applet.id} applet={applet} />
        ))}
      </StyledAppletsList>
    </StyledBody>
  );
};
