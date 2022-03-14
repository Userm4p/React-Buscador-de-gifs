import React from 'react'
import '../index.css'

export const GifGridItem = (props) => {

  return (
    <div className='card animate__animated animate__backInDown animate__delay-0.3s'>
      <a href={props.url} target="_blank">
          <img src={props.url} alt={props.title}/>
      </a>    
    </div>
  )
}
