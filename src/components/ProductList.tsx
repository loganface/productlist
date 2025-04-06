import ProductCard from './ProductCard'
import { products } from '../data/products'  // Import the products array from your data file

export default function ProductList() {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          name={product.name}
          productLink={product.productLink}
          imageUrl={product.imageUrl}
          primarySource={product.primarySource}
          secondarySources={product.secondarySources}
        />
      ))}
    </div>
  )
}