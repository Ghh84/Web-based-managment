import React, { Component } from 'react'
import AuthService from '../../services/auth.service'
class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn }
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc'
    } else {
      sortColumn.path = path
      sortColumn.order = 'asc'
    }
    this.props.onSort(sortColumn)
  }

  renderSortIcon = (column) => {
    const sortColumn = { ...this.props.sortColumn }
    if (column.path !== sortColumn.path) return null
    if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc" />
    return <i className="fa fa-sort-desc" />
  }

  render() {
    return (
      <thead className="tableHeader">
        <tr>
          {this.props.columns.map((column) => (
            <React.Fragment>
              {column.label !== 'Agent' &&
                column.label !== 'createdData' &&
                column.label !== 'updatedDate' && (
                  <th
                    className="clickable"
                    key={column.path || column.key}
                    onClick={() => this.raiseSort(column.path)}
                  >
                    {column.label} {this.renderSortIcon(column)}
                  </th>
                )}
              {AuthService.getCurrentUser().role === 1 &&
                (column.label === 'Agent' ||
                  column.label === 'createdData' ||
                  column.label === 'updatedDate') && (
                  <th
                    className="clickable"
                    key={column.path || column.key}
                    onClick={() => this.raiseSort(column.path)}
                  >
                    {column.label} {this.renderSortIcon(column)}
                  </th>
                )}
            </React.Fragment>
          ))}
        </tr>
      </thead>
    )
  }
}

export default TableHeader
