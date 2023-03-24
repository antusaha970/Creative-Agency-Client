import React from 'react'
import { Navigate } from 'react-router-dom'
function PrivateRoute({ isSignedIn, children }) {
    if (!isSignedIn) {
        return <Navigate to="/login" replace />
    }
    return children
}
export default PrivateRoute;