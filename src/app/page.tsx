import SearchContainer from '../components/SearchContainer'
import { fetchProductsFromSheet, fallbackProducts, SHEET_ID } from '../data/products'

async function getProducts() {
  try {
    const products = await fetchProductsFromSheet(SHEET_ID);
    return products.length > 0 ? products : fallbackProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    return fallbackProducts;
  }
}

export default async function Home() {
  const products = await getProducts();
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-black">Every Product Used By Bryan Johnson</h1>
          <p className="text-gray-600 mb-2">
            A constantly-updated list of products personally used by Bryan in his Blueprint Protocol.
          </p>
          <p className="text-gray-600 mb-4">PS: I'm not affiliated with Bryan, but many of these links are affiliate links.</p>
          <p className="text-gray-500 text-sm">*current as of {currentDate}</p>
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