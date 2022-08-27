import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://sathish-krishnan-resume.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          Expense Manager
        </a>
        <span className="ms-1">&copy; 2022 CSK Labs.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://sathish-krishnan-resume.herokuapp.com" target="_blank" rel="noopener noreferrer">
          CSK Labs
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
