import React from 'react'

export default function Err403() {
  return (
    <div className='test-wrapper'>
      <div className='title' data-content={404}>
        403 -ACCESS DENIED
      </div>
      <div className='subtitle' >
        oops, you don't have permissino to access tihs page.
      </div>
    </div>
  )
}

