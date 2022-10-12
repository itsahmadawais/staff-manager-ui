import React from 'react'

export default function Avatar({image, imageClass}) {
  return (
    <img src={image ? image : '/images/avatar.png'} className={'avatar '+imageClass} alt='' />
  )
}
