import { type RouteConfig, route, index } from '@react-router/dev/routes'

export default [
  index('./home.tsx'),
  route('listing', './listing.tsx'),
  route('add', './add.tsx'),
  route('chat', './chat.tsx'),
  route('save', './save.tsx'),
] satisfies RouteConfig
