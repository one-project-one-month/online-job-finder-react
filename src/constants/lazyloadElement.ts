import { lazy } from 'react';

//public
export const PublicLayout = lazy(()=> import ('@/components/layouts/PublicLayout'))
export const HomePage = lazy(() => import('@/pages/Home/HomePage'));

// list 
export const ListingPage = lazy(() => import('@/pages/Listing/ListPage'));
export const FilterPage = lazy(() => import('@/pages/Listing/FilterPage'));

export const SavePage = lazy(() => import('@/pages/Save/SavePage'));
export const ChatPage = lazy(() => import('@/pages/Chat/ChatPage'));
export const AddPage = lazy(() => import ('@/pages/Add/AddPage'))

//admin
export const AdminLayout = lazy(()=> import('@/components/layouts/AdminLayout'));