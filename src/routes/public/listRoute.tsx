import LazyLoad from "@/components/_ui/Lazyload";
import { ListingPage } from "@/constants/lazyloadElement";

const listRoute = [
    {
        path: "listing", 
        element: <LazyLoad component={ListingPage}/>, 
      },
]

export default listRoute;