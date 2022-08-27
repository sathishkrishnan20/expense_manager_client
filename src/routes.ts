import React from 'react'

const Dashboard = React.lazy(() => import('./screens/home'))
const Colors = React.lazy(() => import('./screens/colors'))


const routes = [
  { path: '/', exact: true, name: 'Home'  },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/colors', name: 'Dashboard', element: Colors },
]

export default routes
