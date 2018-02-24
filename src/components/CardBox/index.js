import React from 'react'
import './style.css'

export const CardBox = ({ title, paragraph, link, ...props }) => {
  const children = (
    <div className="cardbox-padding">
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </div>
  )

  return <div className="cardbox box">{link ? <a href={link}>{children}</a> : children}</div>
}
