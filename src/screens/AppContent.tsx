import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Container , LinearProgress} from '@mui/material'

// routes config
import routes from '../routes'

const AppContent = () => {
  return (
    <Container>
      <Suspense fallback={<LinearProgress color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
       </Suspense>
    </Container>
  )
}

export default React.memo(AppContent)
