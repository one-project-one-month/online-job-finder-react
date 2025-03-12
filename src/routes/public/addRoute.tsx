import LazyLoad from "@/components/_ui/Lazyload";
import { AddPage } from "@/constants/lazyloadElement";

const addRoute = [
    {
        path: "add", 
        element: <LazyLoad component={AddPage}/>, 
      },
]

export default addRoute;