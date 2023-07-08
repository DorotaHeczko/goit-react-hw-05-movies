import { Outlet } from 'react-router-dom';
import { AppMenu } from './AppMenu/AppMenu';
import { Suspense } from 'react';

export const Layout = () => {
  const fallback = null;
  return (
    <>
      <AppMenu />
      <Suspense fallback={fallback}>
        <Outlet />
      </Suspense>
    </>
  );
};
