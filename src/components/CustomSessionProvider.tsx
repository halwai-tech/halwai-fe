"use client";
import React from 'react'
import {SessionProvider} from "next-auth/react";
const CustomSessionProvider = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default CustomSessionProvider