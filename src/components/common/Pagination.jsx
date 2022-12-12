import React from 'react'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

function Pagination({
  data,
  dataLimit,
  setSelectedPage,
  currentPage,
  setCurrentPage,
}) {
  //const [pages] = useState(Math.round(data.length / dataLimit))
  //const [currentPage, setCurrentPage] = useState(1)
  const pagesCount = Math.ceil(data.length / dataLimit)
  if (pagesCount === 1) return null
  const pages = _.range(1, pagesCount + 1)

  // useEffect(() => {
  //   if (selectedPage !== '') setCurrentPage(selectedPage)
  // }, [selectedPage])
  function goToNextPage() {
    setSelectedPage(currentPage + 1)
    setCurrentPage((page) => page + 1)
  }

  function goToPreviousPage() {
    setSelectedPage(currentPage - 1)
    setCurrentPage((page) => page - 1)
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent)
    setSelectedPage(pageNumber)
    setCurrentPage(pageNumber)
  }

  // const getPaginationGroup = () => {
  //   let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
  //   return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
  // }

  return (
    <div>
      <div className="paginationAuditContainer">
        <div className="pagination">
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
          >
            Prev
          </button>
          <nav>
            <ul className="pagination">
              {pages.map((page) => (
                <li
                  key={page}
                  className={
                    page === currentPage ? 'page-item active' : 'page-item'
                  }
                >
                  <a className="page-link" onClick={changePage}>
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${
                currentPage === item ? 'active' : null
              }`}
            >
              <span>{item}</span>
            </button>
          ))} */}
          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages.length ? 'disabled' : ''}`}
          >
            Next
          </button>
        </div>
        <div className="empty"></div>
      </div>
    </div>
  )
}

Pagination.propTypes = {
  dataLimit: PropTypes.number.isRequired,
}

export default Pagination
