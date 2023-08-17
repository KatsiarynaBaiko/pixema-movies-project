import React, { FC } from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";
import classNames from "classnames";

// type PaginationProps = {
//   pagesCount: number;
//   onPageChange: (selectedItem: { selected: number }) => void;
//   currentPage: number;
// };
// const Paginate: FC<PaginationProps> = ({
//   pagesCount,
//   onPageChange,
//   currentPage,
// }) => {
//   return (
//     <ReactPaginate
//       pageCount={pagesCount}
//       onPageChange={onPageChange}
//       containerClassName={styles.pagesContainer}
//       pageClassName={styles.pageNumber}
//       breakClassName={styles.pageNumber}
//       breakLinkClassName={styles.linkPage}
//       activeLinkClassName={styles.linkPage}
//       pageLinkClassName={styles.linkPage}
//       activeClassName={styles.activePageNumber}
//       nextClassName={classNames(styles.arrowButton, {
//         [styles.blockedButton]: currentPage === pagesCount,
//       })}
//       previousClassName={classNames(styles.arrowButton, {
//         [styles.blockedButton]: currentPage === 1,
//       })}
//       previousLinkClassName={styles.linkPage}
//       nextLinkClassName={styles.linkPage}
//     />
//   );
// };

// pagination version 2

type PaginationProps = {
  filmsPerPage: number;
  totalFilms: number;
  paginate: any;
};


const Paginate: FC<PaginationProps> = ({ filmsPerPage, totalFilms, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul className="pagination">{
        pageNumbers.map(number => (
          <li className="page-item" key={number}>
            <a href="#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))
      }</ul>
    </div>
  );
};

export default Paginate;

