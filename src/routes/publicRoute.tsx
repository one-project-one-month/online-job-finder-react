import  LazyLoad from '@/components/_ui/Lazyload';
import { AddPage, ChatPage, HomePage, ListingPage, PublicLayout, SavePage } from '@/constants/lazyloadElement';
import { RouteObject } from 'react-router-dom';

const publicRoute: RouteObject[] = [
  {
    path: "/",
    element: <LazyLoad component={PublicLayout}/>, 

    children: [
      {
        index: true, 
        element: <LazyLoad component={HomePage}/>, 
      },
      {
        path: "listing", 
        element: <LazyLoad component={ListingPage}/>, 
      },
      {
        path : 'add',
        element: <LazyLoad component={AddPage}/>,
      },
      {
        path : 'chat',
        element: <LazyLoad component={ChatPage}/>,  
      },
      {
        path : 'save',
        element: <LazyLoad component={SavePage}/>,
      }
    ],
  },
];

export default publicRoute;
