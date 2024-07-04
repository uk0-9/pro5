import React from 'react'

export default function String_slice(data,slice_end) {
  return (
    data.length > slice_end ? data.slice(1, slice_end) + "..." : data

  )
}
