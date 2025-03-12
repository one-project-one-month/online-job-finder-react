
import { createBrowserRouter } from 'react-router-dom';
import adminRoute from './admin/adminRoute';
import publicRoute from './public/publicRoute';


const router = createBrowserRouter([
  {
    errorElement: 404, 
  },
  ...adminRoute,  
  ...publicRoute, 
]);

export default router;
