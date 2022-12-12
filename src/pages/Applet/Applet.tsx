import { useEffect } from 'react';

import { breadcrumbs } from 'redux/modules';
import { useAppDispatch } from 'redux/store';
import { Svg } from 'components/Svg';
import { page } from 'resources';
import { useBaseBreadcrumbs } from 'hooks';

export const Applet = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const baseBreadcrumbs = useBaseBreadcrumbs();

  useEffect(() => {
    dispatch(
      breadcrumbs.actions.setBreadcrumbs([
        ...baseBreadcrumbs,
        {
          icon: <Svg id="basket" width="14" height="16" />,
          label: 'Applet',
          navPath: page.applet,
        },
      ]),
    );
  }, [dispatch, baseBreadcrumbs]);

  return <>Applet page</>;
};
