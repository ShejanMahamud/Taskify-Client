"use client"
import { NextUIProvider } from '@nextui-org/react';
import React, { ReactNode } from 'react'

interface NextUIWrapperProps {
    children: ReactNode;
}

const NextUIWrapper: React.FC<NextUIWrapperProps> = ({children}) => {
  return (
    <NextUIProvider>{children}</NextUIProvider>
  )
}

export default NextUIWrapper