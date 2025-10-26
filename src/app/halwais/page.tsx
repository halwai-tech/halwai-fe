import React from 'react'
import Halwais from '@/components/Halwais'
import { Suspense } from 'react'
const halwaispage = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
    <Halwais />
    </Suspense>
  )
}

export default halwaispage