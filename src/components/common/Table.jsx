import React from 'react'

import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = ({ data, columns, sortColumn, onSort, className }) => (
  <table className={`table ${className}`}>
    <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
    <TableBody columns={columns} data={data} />
  </table>
)

export default Table
