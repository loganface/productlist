import SearchContainer from '../components/SearchContainer'
import { products } from '../data/products'

export default function Home() {
  return (
    <main className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-black">The Big Bryan Johnson Product Masterlist</h1>
          <p className="text-gray-600 mb-2">
            A constantly-updated list of products personally used by Bryan in his Blueprint Protocol.
          </p>
          <p className="text-gray-600 mb-1">PS: Not affiliated with Bryan, I just think he's neat.</p>
          <p className="text-gray-600 font-bold mb-4">PPS: Something here wrong, out-of-date, or needs updating? DM me on X</p>
          <p className="text-gray-500 text-sm">*Last Updated: 22 March 2025</p>
        </div>
        <div className="mt-8">
          <a 
            href="https://blueprint.bryanjohnson.com/collections/all-products"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-8"
          >
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-blue-900">Official Blueprint Store</h2>
                  <div className="mt-6">
                    <p className="text-gray-600">Shop Bryan's curated collection of supplements, biomarker tests, and lifestyle products</p>
                  </div>
                </div>
                <div className="ml-6 flex-shrink-0">
                  <img
                    src="https://blueprint.bryanjohnson.com/cdn/shop/files/Header_Asset_Transparent.png?v=1732753627&width=1280"
                    alt="Blueprint Store"
                    className="w-32 h-24 object-contain"
                  />
                </div>
              </div>
            </div>
          </a>
          <SearchContainer initialProducts={products} />
        </div>
      </div>
    </main>
  )
}