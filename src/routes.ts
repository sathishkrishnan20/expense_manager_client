import React from 'react'

const Dashboard = React.lazy(() => import('./screens/home'))
const Colors = React.lazy(() => import('./screens/colors'))
const ExpenseCategories = React.lazy(() => import('./screens/contents/expense_categories'))
const AddExpenses = React.lazy(() => import('./screens/contents/expenses/add'))
const AddIncome = React.lazy(() => import('./screens/contents/income/add'))


const routes = [
  { path: '/', exact: true, name: 'Home'  },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/colors', name: 'Dashboard', element: Colors },
  { path: '/categories', name: 'ExpenseCategories', element: ExpenseCategories },
  { path: '/expense/add', name: 'Add Expense', element: AddExpenses },
  { path: '/income/add', name: 'Add Income', element: AddIncome },
  
]

export default routes
