import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { breadcrumbs } from 'redux/modules';
import { useAppDispatch } from 'redux/store';
import { page } from 'resources';
import { useBaseBreadcrumbs } from 'hooks';
import { Svg } from 'components/Svg';

export const Basket = () => {
  const { t } = useTranslation('app');
  const dispatch = useAppDispatch();
  const baseBreadcrumbs = useBaseBreadcrumbs();

  useEffect(() => {
    dispatch(
      breadcrumbs.actions.setBreadcrumbs([
        ...baseBreadcrumbs,
        {
          icon: <Svg id="basket" width="16" height="16" />,
          label: t('basket'),
          navPath: page.basket,
        },
      ]),
    );
  }, [dispatch, t, baseBreadcrumbs]);

  return <>Basket</>;
};
