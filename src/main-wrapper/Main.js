import { useState } from "react";
import { FunnelIcon } from "@heroicons/react/20/solid";
import Sorting from "../sorting/Sorting";
import Filters from "../side-filtering/Filters";
import MobileFilters from "../mobile-filters/MobileFilters";
import Products from "../products/Products";
import SearchBox from "../reusable-components/SearchBox";

function Main({
  results,
  query,
  handleInputChange,
  handleFilterChange,
  handleSortChange,
}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <MobileFilters />

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 ">
            <SearchBox query={query} handleInputChange={handleInputChange} />
            <div className="flex items-last">
              <Sorting handleSortChange={handleSortChange} />

              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <Filters handleFilterChange={handleFilterChange} />

              {/* Product grid */}
              <div className="lg:col-span-3">
                <Products results={results} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export default Main;
