import { ReactNode } from 'react';

export interface NavItem {
  id: string;
  title: string;
  path: string;
  icon: ReactNode;
  component?: React.ComponentType; // Made optional as we're using Outlet for rendering
}

