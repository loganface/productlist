import ProductCard from './ProductCard'
import { Product } from '../data/products'  // Import the Product type

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
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