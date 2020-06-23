import React from "react";
const PaginatorBar = ({
  studentsPerPage,
  totalStudents,
  onPaginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalStudents / studentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mainbox">
      <div className="pgn fullprevnext">
        <ul
          className="pgn__list"
          role="navigation"
          aria-labelledby="paginglabel"
          type="none"
        >
          {currentPage > 1 ? (
            <li
              key="1"
              onClick={() => onPaginate(currentPage - 1)}
              className="prev"
              title="Previous Page"
            >
              <div rel="prev">
                <i className="pgn__prev-icon icon-angle-left"></i>
                <span className="pgn__prev-txt">Previous</span>
              </div>
            </li>
          ) : (
            <li className="prev" title="Previous Page" key="1">
              <div rel="prev">
                <i className="pgn__prev-icon icon-angle-left"></i>
                <span className="pgn__prev-txt">Previous</span>
              </div>
            </li>
          )}
          <li className="pgn__item" key="2">
            {pageNumbers.map((number, index) =>
              number === currentPage ? (
                <div
                  onClick={() => onPaginate(number)}
                  key={index}
                  className="current"
                >
                  {number}
                </div>
              ) : (
                <div onClick={() => onPaginate(number)} key={index}>
                  {number}
                </div>
              )
            )}
          </li>
          {currentPage < pageNumbers.length ? (
            <li
              key="3"
              className="next"
              title="Next Page"
              onClick={() => onPaginate(currentPage + 1)}
            >
              <div rel="next">
                <i className="pgn__next-icon icon-angle-right"></i>
                <span className="pgn__next-txt">Next</span>
              </div>
            </li>
          ) : (
            <li className="next" title="Next Page" key="3">
              <div rel="next">
                <i className="pgn__next-icon icon-angle-right"></i>
                <span className="pgn__next-txt">Next</span>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(PaginatorBar);
