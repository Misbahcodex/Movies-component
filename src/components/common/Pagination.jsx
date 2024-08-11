import React from 'react';
import _ from 'lodash';

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount <= 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li
          key="Previous"
          className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
        >
          <button
            onClick={() => {
              if (currentPage === 1) return;
              onPageChange(currentPage - 1);
            }}
            className="page-link"
            tabIndex="-1"
          >
            Previous
          </button>
        </li>
        {pages.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${
              pageNumber === currentPage ? 'active' : ''
            }`}
          >
            <button
              onClick={() => onPageChange(pageNumber)}
              className="page-link"
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li
          key="Next"
          className={`page-item ${
            currentPage === pagesCount ? 'disabled' : ''
          }`}
        >
          <button
            onClick={() => {
              if (currentPage === pagesCount) return;
              onPageChange(currentPage + 1);
            }}
            className="page-link"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

// import React from 'react';
// const Pagination = (props) => {
//   const { itemsCount, pageSize, currentPage, onPageChange } = props;
//   const pagesCount = Math.ceil(itemsCount / pageSize);
//   if (pagesCount <= 1) return null;
//   const pages = _.range(1, pagesCount + 1);
//   return (
//     <nav>
//       <ul className="pagination">
//         {pages.map((page) => (
//           <li
//             key={page}
//             className="page-item "
//           >
//             <a
//               className="page-link"
//               onClick={() => onPageChange(page)}
//             >
//               {page}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;
