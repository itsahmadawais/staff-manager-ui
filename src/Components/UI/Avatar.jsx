import React from 'react'

export default function Avatar({image, imageClass}) {
  return (
    <img src={image} className={imageClass} alt='' />
  )
}
