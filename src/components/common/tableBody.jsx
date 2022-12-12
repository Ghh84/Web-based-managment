import React, { Component } from 'react'
import _ from 'lodash'
import AuthService from '../../services/auth.service'

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item)

    return _.get(item, column.path)
  }

  createKey = (item, column) => {
    return item._id + (column.path || column.key)
  }

  render() {
    //const { data, currentPage, dataLimit, columns } = this.props

    return (
      <tbody>
        {this.props.getPaginatedData().map((item, index) => {
          return (
            <tr>
              <td
                className="nameTag"
                key={index}
                onClick={() => this.props.handleSelection(item)}
              >
                {item.ticketNo}
              </td>
              <td
                style={{
                  backgroundColor: '#FBFAC6',
                  color:
                    item.status === 'Paid'
                      ? 'green'
                      : item.status === 'Pending'
                      ? 'black'
                      : 'red',
                }}
              >
                <button
                  style={{
                    color: 'white',
                    fontSize: '10px',
                    width: '20px',
                    height: '20px',
                    backgroundColor:
                      item.status === 'Paid'
                        ? 'green'
                        : item.status === 'NotPaid'
                        ? 'red'
                        : 'gray',
                    borderRadius: '50%',
                    marginRight: '5px',
                  }}
                >
                  {item.status === 'Paid'
                    ? '✔'
                    : item.status === 'NotPaid'
                    ? 'X'
                    : ''}
                </button>
                {item.status}
              </td>
              <td style={{ backgroundColor: '#A1F3A7' }}>{item.sName}</td>
              <td style={{ backgroundColor: '#A1F3A7' }}>{item.sCity}</td>
              <td style={{ backgroundColor: '#A1F3A7' }}>{item.sAmount}</td>
              <td style={{ backgroundColor: '#A1F3A7' }}>{item.sCountry}</td>
              <td style={{ backgroundColor: '#A1F3A7' }}>{item.sReference}</td>
              <td style={{ backgroundColor: '#B1B6F9' }}>{item.rName}</td>
              <td style={{ backgroundColor: '#B1B6F9' }}>{item.rCity}</td>
              <td style={{ backgroundColor: '#B1B6F9' }}>{item.rAmount}</td>
              <td style={{ backgroundColor: '#B1B6F9' }}>{item.rCountry}</td>
              {AuthService.getCurrentUser().role === 1 && (
                <React.Fragment>
                  <td style={{ backgroundColor: '#FBFAC6' }}>{item.name}</td>
                  <td style={{ backgroundColor: '#FBFAC6' }}>
                    {item.createdDate.substring(0, 10)}
                  </td>
                  <td style={{ backgroundColor: '#FBFAC6' }}>
                    {item.updatedDate.substring(0, 10)}
                  </td>
                </React.Fragment>
              )}
            </tr>
          )
        })}
      </tbody>
    )
  }
}
export default TableBody
