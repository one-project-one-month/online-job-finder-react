
import { createBrowserRouter } from 'react-router-dom';
import adminRoute from './adminRoute';
import publicRoute from './publicRoute';


const router = createBrowserRouter([
  {
    errorElement: 404, 
  },
  ...adminRoute,  
  ...publicRoute, 
]);

export default router;
