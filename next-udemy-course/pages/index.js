import React from 'react';
import Link from 'next/link';

const HomePage = (props) => {
  const { products } = props;
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><Link href='/portfolio'>Portfolio</Link></li>
        <li><Link href='/client'>Clients</Link></li>
      </ul>
      {/*fetching this product data will be done on the server side, not the client side*/}
      <ul>
        {products.map(product => <li key={product.id}>{product.title}</li>)}
      </ul>
    </div>
  )
}
// getStaticProps function will be executed first and then the HomePage component will be executed/rendered.
export async function getStaticProps() {
  return { 
    props: {
      products: [{ id: 'p1', title: 'Product 1'}]
    }
  };
}

export default HomePage