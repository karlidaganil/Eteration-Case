/* eslint-disable react/prop-types */
import { useState } from "react";
import "./style.scss";

const Pagination = ({ children, itemsPerPage = 12 }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = children?.length;
  const items = children?.slice(startIndex, itemsPerPage + startIndex);
  const totalPages =
    totalItems > itemsPerPage ? Math.ceil(totalItems / itemsPerPage) : 1;

  console.log(totalPages);
  const goToNextPage = () => {
    setStartIndex((prev) => prev + itemsPerPage);
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    setStartIndex((prev) => prev - itemsPerPage);
    setCurrentPage(currentPage - 1);
  };
  return (
    <div className="pagination-container">
      {items}
      <div className="aritmatic-container">
        <button disabled={startIndex === 0} onClick={goToPreviousPage}>
          {"<"}
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => {
              setStartIndex((page - 1) * itemsPerPage);
              setCurrentPage(page);
            }}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
        <button
          disabled={startIndex + itemsPerPage >= totalItems}
          onClick={goToNextPage}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
