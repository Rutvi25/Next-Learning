import React from 'react';
import Link from 'next/link';
import '../src/styles.module.css';

const Page = () => {
  return (
    <div>
      <h1>Index page</h1>
      <Link href={'/notes'}>
        <a>Link</a>
      </Link>
    </div>
  )
}

export default Page;