import React from 'react'
import Column from './Column'

const table={
    border:'1px solid #000',
}

function Table() {
  return (
    <table style={table}>
            <thead>
                <tr>
                    <Column/>
                </tr>
            </thead>
    </table>
  )
}

export default Table
