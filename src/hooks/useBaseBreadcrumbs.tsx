import { Svg } from 'components/Svg';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Breadcrumb } from 'redux/modules';
import { page } from 'resources';

export const useBaseBreadcrumbs = () => {
  const { id } = useParams();

  const [baseBreadcrumbs, setBaseBreadcrumbs] = useState<Breadcrumb[]>([]);

  useEffect(() => {
    const newBreadcrumbs: Breadcrumb[] = [];

    newBreadcrumbs.push({
      icon: <Svg id="library" width="14" height="16" />,
      label: 'Applet library',
      navPath: page.appletsList,
    });

    setBaseBreadcrumbs(newBreadcrumbs);
  }, [id]);

  return baseBreadcrumbs;
};
