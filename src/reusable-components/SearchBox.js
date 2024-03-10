import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
function SearchBox({ handleInputChange, query }) {
    return (
        <div>
            <div className="relative mt-6 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon className="h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                </div>
                <input
                    onChange={handleInputChange}
                    value={query}
                    type="text"
                    name="search"
                    id="search"
                    className="block w-full rounded-md border-0 py-2 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search For Products..."
                />
            </div>
        </div>
    );
}
export default SearchBox;
