import path from 'path';
import React from 'react';
import Link from 'next/link';
//importing file system module from node, 
import fs from 'fs/promises'  
// browser side javaScript can't access the file system, but it can be used inside the getStaticProps.
// readFile() will return the promise when we use fs/promise.

const HomePage = (props) => {
  const { products } = props;
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><Link href='/portfolio'>Portfolio</Link></li>
        <li><Link href='/client'>Clients</Link></li>
      </ul>
      <ul>
        {products.map(product => <li key={product.id}>{product.title}</li>)}
      </ul>
    </div>
  )
}
// getStaticProps function will be executed first and then the HomePage component will be executed/rendered.
// fetching this product data will be done on the server side, not the client side
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return { 
    props: {
      products: data.products
    }
  };
}

export default HomePage