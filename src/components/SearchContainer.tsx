'use client'

import { useState, useCallback } from 'react'
import SearchBar from './SearchBar'
import ProductList from './ProductList'
import { Product } from '../data/products'

interface SearchContainerProps {
  initialProducts: Product[]
}

export default function SearchContainer({ initialProducts }: SearchContainerProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = initialProducts.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.primarySource.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.secondarySources.some(source => 
      source.toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  return (
    <>
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>
      <ProductList products={filteredProducts} />
    </>
  )
} 