interface ProductCardProps {
  name: string;
  productLink: string;
  imageUrl: string;
  primarySource: string;
  secondarySources: string[];
}

export default function ProductCard({ 
  name, 
  productLink, 
  imageUrl, 
  primarySource, 
  secondarySources 
}: ProductCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <a 
            href={productLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium text-lg"
          >
            {name}
          </a>
          <div className="mt-4">
            <p className="text-gray-600 mb-2">Mentioned in:</p>
            <div className="space-y-2">
              <a
                href={primarySource}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-gray-600 px-3 py-1 rounded-full text-sm"
              >
                Primary Source
              </a>
              {secondarySources.map((source, index) => (
                <a
                  key={index}
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  Source {index + 2}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="ml-6">
          <img
            src={imageUrl}
            alt={name}
            className="w-24 h-24 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}