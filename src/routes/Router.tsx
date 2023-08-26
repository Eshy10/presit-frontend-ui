import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PageLoading from 'components/pageLoading';
import Page from 'components/page';

import paths from 'routes/path';

const Home = lazy(() => import('pages/Home'));
const PageNotFound = lazy(() => import('pages/PageNotFound'));
const Blog = lazy(() => import('pages/Blog'));

interface Routes {
   path: string;
   element: React.ReactNode;
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
   <Suspense fallback={<PageLoading />}>
      <Page>
         <Component />
      </Page>
   </Suspense>
);

const routes: Routes[] = [
   { path: paths.HOME, element: getRouteElement(Home) },
   { path: paths.BLOG, element: getRouteElement(Blog) },
   { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) },
];

export default createBrowserRouter(routes);
