import LazyLoad from "@/components/_ui/Lazyload";
import { ChatPage } from "@/constants/lazyloadElement";

const chatRoute = [
    {
        path: "chat", 
        element: <LazyLoad component={ChatPage}/>, 
      },
]

export default chatRoute;