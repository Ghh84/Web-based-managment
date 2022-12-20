import React from 'react'
import { useEffect, useState } from 'react'
import Table from '../common/table'
import Pagination from '../common/Pagination'
import _ from 'lodash'

const TransactionTable = ({
  data,
  dataLimit,
  selectedPage,
  setSelectedPage,
  selectedTxn,
  setSelectedTxn,
  setPageState,
  handlePageSwitch,
}) => {
  const columns = [
    { path: 'ticketNo', label: 'TicketNo' },
    { path: 'status', label: 'Status' },
    { path: 'sName', label: 'Name' },
    { path: 'sCity', label: 'City' },
    { path: 'sAmount', label: 'Amount' },
    { path: 'sCountry', label: 'Country' },
    { path: 'sReference', label: 'Reference' },
    { path: 'rName', label: 'Name' },
    { path: 'rCity', label: 'City' },
    { path: 'rAmount', label: 'Amount' },
    { path: 'rCountry', label: 'Country' },
    { path: 'name', label: 'Agent' },
    { path: 'createdDate', label: 'createdData' },
    { path: 'updatedDate', label: 'updatedDate' },
  ]

  //   const [pages] = useState(Math.round(data.length / dataLimit))
  const [currentPage, setCurrentPage] = useState(1)
  //const [selectedTxn, setSelectedTxn] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [sortColumn, setColumnData] = useState({
    path: 'status',
    order: 'desc',
  })
  function handleSelection(item) {
    console.log('came to transaction selections..', item)
    setSelectedTxn(item)
    setPageState({ isEdit: 1, isAdd: 0, isRequest: 0 })
  }
  const getPaginatedData = () => {
    //sort the data based on the column name
    const sortedData = _.orderBy(data, [sortColumn.path], [sortColumn.order])
    //paginate data
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return sortedData.slice(startIndex, endIndex)
    //return PaginationData(data, currentPage, datalimit)
    // const startIndex = (currentPage - 1) * dataLimit
    // return _(data).slice(startIndex).take(dataLimit).value()
  }
  const handleSort = (sortColumn) => {
    setColumnData({ path: sortColumn.path, order: sortColumn.order })
    //this.setState({ sortColumn })
  }

  return (
    <div>
      <div>
        {/* show the posts, 10 posts at a time */}
        <div>
          <Table
            columns={columns}
            getPaginatedData={getPaginatedData}
            handleSelection={handleSelection}
            sortColumn={sortColumn}
            onSort={handleSort}
            handlePageSwitch={handlePageSwitch}
          />
        </div>
        <Pagination
          data={data}
          dataLimit={dataLimit}
          setSelectedPage={setSelectedPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default TransactionTable
