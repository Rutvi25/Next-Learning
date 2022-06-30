import React from 'react'
import { useRouter } from 'next/router'

const ClientProjectPage = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h1>
        Project Page for selected Client
      </h1>
    </div>
  )
}

export default ClientProjectPage