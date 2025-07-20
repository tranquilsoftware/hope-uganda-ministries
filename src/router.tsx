import { createBrowserRouter, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import App from './App';
import Donate from './pages/donate';
// import Events from './pages/events';
// import Menu from './pages/menu';
import About from './pages/about';
import GetInvolved from './pages/get-involved';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load the section components
const FundDistribution = lazy(() => import('./pages/get-involved/sections/FundDistribution'));
const Fundraising = lazy(() => import('./pages/get-involved/sections/Fundraising'));
// const Volunteer = lazy(() => import('./pages/get-involved/sections/Volunteer'));
const Contact = lazy(() => import('./pages/get-involved/sections/Contact'));

const AnimatedRoutes = () => (
  <AnimatePresence mode="wait">
    <Outlet />
  </AnimatePresence>
);

export const router = createBrowserRouter([
  {
    element: <AnimatedRoutes />,
    children: [
      {
        path: '*',
        element: <App />,
      },
      {
        path: '/donate',
        element: <Donate/>,
      },
      // {
      //   path: '/events',
      //   element: <Events/>,
      // },
      // {
      //   path: '/menu',
      //   element: <Menu/>
      // },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/get-involved',
        element: <GetInvolved />,
        children: [
          {
            path: 'fund-distribution',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <FundDistribution />
              </Suspense>
            ),
          },
          {
            path: 'fundraising',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <Fundraising />
              </Suspense>
            ),
          },
          // {
          //   path: 'volunteer',
          //   element: (
          //     <Suspense fallback={<LoadingSpinner />}>
          //       <Volunteer />
          //     </Suspense>
          //   ),
          // },
          {
            path: 'contact',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            ),
          },
          // Redirect to fund-distribution by default
          {
            index: true,
            element: null,
            loader: async () => {
              window.location.href = '/hope-uganda-ministries/get-involved/fund-distribution';
              return null;
            },
          },
        ],
      }
    ]
  },
],
  {
    basename: '/hope-uganda-ministries/'
  }
);