import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const pagination = ({ usersinfo, handlePage }) => {
  const [usersCount, setUsersCount] = useState(0);
  const [userOffset, setUserOffset] = useState(0);
  const usersPerPage = 4;

  useEffect(() => {
    // Fetch items based of number of page
    const endOffset = userOffset + usersPerPage;
    handlePage(userOffset, endOffset);
    setUsersCount(Math.ceil(usersinfo.length / usersPerPage));
  }, [userOffset, usersPerPage, usersinfo]);

  const handlePageClick = (event) => {
    let currentPage = event.selected + 1;
    const newOffset = (currentPage * usersPerPage) % usersinfo.length;
    setUserOffset(newOffset);
  };
  return (
    <div>
      <ReactPaginate
        nextLabel=">>"
        previousLabel="<<"
        breakLabel="..."
        pageCount={usersCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default pagination;
