export default function Header() {
    return (
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          The Big Bryan Johnson Product Masterlist
        </h1>
        <p className="text-gray-600">
          A constantly-updated list of products personally used by Bryan in his Blueprint Protocol.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          PS: Not affiliated with Bryan, I just think he's neat.
          <br />
          PPS: Something here wrong, out-of-date, or needs updating? DM me on X
        </p>
        <div className="text-sm text-gray-500 mt-4">
          *Last Updated: 22 March 2025
        </div>
      </header>
    )
  }