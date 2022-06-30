import React from 'react'
import Link from 'next/link'

const ClientPage = () => {
  const clients = [
    { id: 'max', name: 'Max' },
    { id: 'john', name: 'John' }
  ]
  return (
    <div>
      <h1>Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/client/${client.id}`}>{client.name}</Link>
          </li>)
        )}

        {/* Another way to setup the Link href */}
        {/* {clients.map((client) => (
          <li key={client.id}>
            <Link 
              href={{ 
                pathname: 'client/[id]',
                query: {id: client.id},
              }}>
                {client.name}
            </Link>
          </li>)
        )} */}
        
      </ul>
    </div>
  )
}

export default ClientPage