import React from 'react'

export default function EmployeeShift({data}) {
  return (
    <div className='employee-shift mb-1 p-1'>
        <span>{data.client}</span>
        <span> - </span>
        <span>{data.site}</span>
        <span> - </span>
        <span>{data.startTime}</span>
        <span> - </span>
        <span>{data.endTime}</span>
        <p className='status mb-0 mt-1 px-1'>{data.status}</p>
    </div>
  )
}
