interface ProductCardProps {
  name: string;
  productLink: string;
  imageUrl: string;
  primarySource: string;
  secondarySources: string[];
}

function getSourceType(url: string): string {
  if (url.includes('x.com') || url.includes('twitter.com')) return 'X';
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'YouTube';
  if (url.includes('instagram.com')) return 'Instagram';
  if (url.includes('blueprint.bryanjohnson.com')) return 'Blueprint';
  if (url.includes('protocol.bryanjohnson.com')) return 'Protocol';
  return 'Link';
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
            <div className="space-y-2">
              <span className="text-gray-600 mr-2">Used by Bryan:</span>
              <a
                href={primarySource}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-gray-600 px-3 py-1 rounded-full text-sm"
              >
                {getSourceType(primarySource)}
              </a>
              {secondarySources.map((source, index) => (
                <a
                  key={index}
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-gray-600 px-3 py-1 rounded-full text-sm ml-2"
                >
                  {getSourceType(source)}
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