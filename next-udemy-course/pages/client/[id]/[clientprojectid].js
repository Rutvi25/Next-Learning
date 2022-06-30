import React from 'react'
import { useRouter } from 'next/router'

const SelectedClientProjectPage = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h1>
        Project Page of specific Project for selected Client
      </h1>
    </div>
  )
}

export default SelectedClientProjectPage