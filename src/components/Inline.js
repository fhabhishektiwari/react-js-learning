import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue',
}

function Inline() {
    return (
        <div>
            <h2 style={heading}>Inline</h2>
            <h2 className='error'>Error(Inline)</h2>

            {
                /*this works only locally*/
                /*<h1 className={Styles.success}>Success</h1>*/
            }

        </div>
    )
}

export default Inline
