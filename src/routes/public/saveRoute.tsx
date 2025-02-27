import LazyLoad from "@/components/_ui/Lazyload";
import { SavePage } from "@/constants/lazyloadElement";

const saveRoute = [
    {
        path: "save", 
        element: <LazyLoad component={SavePage}/>, 
      },
]

export default saveRoute;