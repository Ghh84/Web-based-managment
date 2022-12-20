import React from 'react'
import TableHeader from './tableHeader'
import TableBody from './tableBody'

const Table = ({
  columns,
  handleSelection,
  getPaginatedData,
  sortColumn,
  onSort,
}) => {
  return (
    <table className="table table-bordered">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody
        handleSelection={handleSelection}
        getPaginatedData={getPaginatedData}
      />
    </table>
  )
}

export default Table
