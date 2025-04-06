import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import ProductList from '../components/ProductList'

export default function Home() {
  return (
    <main className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">The Big Bryan Johnson Product Masterlist</h1>
        <p className="text-gray-600 mb-2">
          A constantly-updated list of products personally used by Bryan in his Blueprint Protocol.
        </p>
        <p className="text-gray-600 mb-1">PS: Not affiliated with Bryan, I just think he's neat.</p>
        <p className="text-gray-600 font-bold mb-4">PPS: Something here wrong, out-of-date, or needs updating? DM me on X</p>
        <p className="text-gray-500 text-sm mb-8">*Last Updated: 22 March 2025</p>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-black">Official Blueprint Store</h2>
          <ProductList />
        </div>
      </div>
    </main>
  )
}