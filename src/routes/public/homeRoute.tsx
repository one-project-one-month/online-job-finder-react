import LazyLoad from "@/components/_ui/Lazyload";
import { HomePage } from "@/constants/lazyloadElement";

const homeRoute = [
    {
        path: "/", 
        element: <LazyLoad component={HomePage}/>, 
      },
]

export default homeRoute;