import React from 'react'

export default function Loading() {
  return (
    <div className="loading-container">
    <div className="thermometer">
      <div className="thermometer-progress"></div>
    </div>
    <p className="loading-text">Loading...</p>
  </div>
  )
}
