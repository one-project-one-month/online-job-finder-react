import LazyLoad from "@/components/_ui/Lazyload";
import {  FilterPage, ListingPage } from "@/constants/lazyloadElement";

const listRoute = [
    {
        path: "listing", 
        element: <LazyLoad component={ListingPage}/>, 
    },
    {
      path : 'listing/filter',
      element : <LazyLoad component={FilterPage}/>,

      // children : [
      //   {
      //     index : true,
      //     element : <LazyLoad component={}/>
      //   }
      // ]
    },
]

export default listRoute;