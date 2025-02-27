import  LazyLoad from '@/components/_ui/Lazyload';
import { AdminLayout } from '@/constants/lazyloadElement';
import { RouteObject } from 'react-router-dom';

const adminRoute: RouteObject[] = [
  {
    path: "/admin", 
    element: <LazyLoad component={AdminLayout}/>,
  },
];

export default adminRoute;
