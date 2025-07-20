import { Home } from 'lucide-react';
import { lazy } from 'react';
import { ReactNode, ComponentType } from 'react';

// Define the NavItem interface
export interface NavItem {
  id: string;
  title: string;
  path: string;
  icon: ReactNode;
  component?: ComponentType<any>; // Make component optional since we're using routes
}

// Define the props interface for section components
export interface GetInvolvedSectionProps {
  onNavigate?: (path: string) => void;
}

// Lazy load components for better performance
const FundDistribution = lazy(() => import('./sections/FundDistribution'));
const Fundraising = lazy(() => import('./sections/Fundraising'));
// const Volunteer = lazy(() => import('./sections/Volunteer'));
const Contact = lazy(() => import('./sections/Contact'));

// Navigation items with their respective icons and paths
export const getInvolvedSections: NavItem[] = [
{
    id: 'home',
    title: 'Home',
    path: '/',
    icon: 'home',
    component: Home,
},
  {
    id: 'fund-distribution',
    title: 'Fund Distribution',
    path: '/get-involved/fund-distribution',
    icon: 'dollar-sign',
    component: FundDistribution,
  },
  {
    id: 'fundraising',
    title: 'Fundraising',
    path: '/get-involved/fundraising',
    icon: 'trending-up',
    component: Fundraising,
  },
  // {
  //   id: 'volunteer',
  //   title: 'Volunteer',
  //   path: '/get-involved/volunteer',
  //   icon: 'users',
  //   component: Volunteer,
  // },
  {
    id: 'contact',
    title: 'Contact',
    path: '/get-involved/contact',
    icon: 'mail',
    component: Contact,
  },
];

// Export the default section (first one in the array)
export const DEFAULT_SECTION = getInvolvedSections[0];
