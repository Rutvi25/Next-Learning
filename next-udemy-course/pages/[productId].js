import fs from 'fs/promises';
import path from 'path';
import { title } from 'process';

const ProductDetailsPage = ({ loadedProduct }) => {
  // const { loadedProduct } = prpos;
  // if(!loadedProduct) {
  //   return <p>Loading...</p>
  // }
  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productId;
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const product = data.products.find(product => product.id === productId);
  return {
    props: {
      loadedProduct: product
    }
  }
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { productId: 'p1' } },
      // { params: { productId: 'p2' } },
      // { params: { productId: 'p3' } },
    ],
    fallback: "blocking"
  }
}

export default ProductDetailsPage