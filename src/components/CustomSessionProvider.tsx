"use client";
import React from 'react'
import {SessionProvider} from "next-auth/react";
import { ReactNode } from 'react';
interface CustomSessionProviderProps {
  children: ReactNode;
}


const CustomSessionProvider = ({children}:CustomSessionProviderProps) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default CustomSessionProvider