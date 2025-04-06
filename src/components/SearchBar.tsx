export default function SearchBar() {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search Products"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
    </div>
  )
}