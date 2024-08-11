import React, { Component } from 'react'
import _ from 'lodash'

class TableBody extends Component {
  renderCell = (item, column) => {
    return column.render ? column.render(item) : _.get(item, column.propertyPath)
  }

  createKey = (item, column) => `${item._id}-${column.propertyPath || column.key}`

  render() {
    const { data, columns } = this.props
    console.log("data = ", data)
    console.log("columns = ", columns)
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    )
  }
}

export default TableBody
