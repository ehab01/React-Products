import "./Pagination.css";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Main from "../main-wrapper/Main";
function Pagination({
    itemsPerPage,
    results,
    query,
    handleInputChange,
    handleFilterChange,
    handleSortChange,
}) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = results.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(results.length / itemsPerPage);
    console.log(currentItems);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % results.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Main
                results={currentItems}
                query={query}
                handleInputChange={handleInputChange}
                handleFilterChange={handleFilterChange}
                handleSortChange={handleSortChange}
            />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
        </>
    );
}
export default Pagination;
