import { lazy } from 'react';

import { page } from 'resources';

const AppletsList = lazy(() => import('pages/AppletsList'));
const Applet = lazy(() => import('pages/Applet'));
const Basket = lazy(() => import('pages/Basket'));

export const libraryRoutes = [
  {
    path: page.appletsList,
    Component: AppletsList,
  },
  {
    path: page.applet,
    Component: Applet,
  },
  {
    path: page.basket,
    Component: Basket,
  },
];
