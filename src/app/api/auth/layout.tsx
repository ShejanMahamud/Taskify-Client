import React, { ReactNode } from 'react'

interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({children}) => {
  return (
    <div className={`w-full min-h-screen bg-[url('/gradient-bg.png')] bg-no-repeat bg-cover bg-center`}>
        {children}
    </div>
  )
}

export default AuthLayout