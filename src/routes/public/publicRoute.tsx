import  LazyLoad from '@/components/_ui/Lazyload';
import { HomePage, PublicLayout } from '@/constants/lazyloadElement';
import { RouteObject } from 'react-router-dom';
import listRoute from './listRoute';
import homeRoute from './homeRoute';
import addRoute from './addRoute';
import chatRoute from './chatRoute';
import saveRoute from './saveRoute';

const publicRoute: RouteObject[] = [
  {
    path: "/",
    element: <LazyLoad component={PublicLayout}/>, 

    children: [
      {
        index: true, 
        element: <LazyLoad component={HomePage}/>, 
      },
      ...listRoute,
      ...homeRoute,
      ...addRoute,
      ...chatRoute,
      ...saveRoute
    ],
  },
];

export default publicRoute;
