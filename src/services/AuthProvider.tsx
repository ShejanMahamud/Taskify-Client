"use client"
import React, { ReactNode } from 'react'

interface AuthProviderProps {
    children: ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  return (
    <>{children}</>
  )
}

export default AuthProvider