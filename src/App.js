import Pagination from "./pagination/Pagination";
import Navigation from "./navigation-bar/Navigation";
import "./index.css";
import Main from "./main-wrapper/Main";
import { useState } from "react";
import products from "./data-store/ProductsData";
import {
  sortdescending,
  sortAscending,
  sortByRecentlyAdded,
  drawProductTile,
  sideFiltering
} from "./utilities/Helpers";
function App() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [query, setQuery] = useState("");
  const itemsPerPage = 6;
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);

  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  var filterdProducts = products;
  function filteredData(products, selectedFilter, selectedSort, query) {

    // search box filtering 
    if (query) {
      filterdProducts = filteredItems;
    }
    //filter by category
    if (selectedFilter) {

      filterdProducts = sideFiltering(selectedFilter, filterdProducts)

    }


    if (selectedSort) {
      filterdProducts = products;
      if (selectedSort === "Newest") {
        // Sorting by recently added products by creation date
        filterdProducts = sortByRecentlyAdded(filterdProducts);
        setSelectedSort(null);
      }
      if (selectedSort === "Low to High") {
        // Sorting in ascending order
        filterdProducts = sortAscending(filterdProducts);
        setSelectedSort(null);
      }
      if (selectedSort === "High to Low") {
        // Sorting in descending order
        filterdProducts = sortdescending(filterdProducts);
        setSelectedSort(null);
      }
    }

    return drawProductTile(filterdProducts);
  }

  const results = filteredData(products, selectedFilter, selectedSort, query);




  return (
    <>
      <Navigation />

      <Pagination itemsPerPage={itemsPerPage} results={results}
        query={query}
        handleInputChange={handleInputChange}
        handleFilterChange={handleFilterChange}
        handleSortChange={handleSortChange} />
    </>
  );
}

export default App;
