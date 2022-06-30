import React from 'react'
import { useRouter } from 'next/router'

const ClientProjectPage = () => {
  const router = useRouter()
  console.log(router.query)
  const loadProjectHandler =() => {
    // router.replace('/client/john/project1')
    router.push({
      pathname: '/client/[id]/[clientprojectid]',
      query: { id: 'john', clientprojectid: 'project1'}
    })
  }
  return (
    <div>
      <h1>Project Page for selected Client</h1>
      <button onClick={() => loadProjectHandler()}>Load Project 1</button>
    </div>
  )
}

export default ClientProjectPage