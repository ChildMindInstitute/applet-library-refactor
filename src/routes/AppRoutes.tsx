import { Navigate, Route, Routes } from 'react-router-dom';

import { page } from 'resources';
import { BaseLayout } from 'layouts/BaseLayout';

import { libraryRoutes } from './routesList';

export const AppRoutes = () => (
  <Routes>
    <Route path={page.appletsList} element={<BaseLayout />}>
      {libraryRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
