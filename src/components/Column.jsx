import React from 'react'

const th = {
    border: '1px solid #000',
}

function Column() {
    return (
        <>
            <th style={th}>Sno.</th>
            <th style={th}>Name</th>
            <th style={th}>Mobile</th>
            <th style={th}>Address</th>
        </>
    )
}

export default Column
