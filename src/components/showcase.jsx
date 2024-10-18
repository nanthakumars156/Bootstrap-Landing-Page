import React from 'react'


export default function Showcase(props1) {

  return (
  <div className="col-lg-6 order-lg-1 my-auto showcase-text">
    <h2>{props1.titlename}</h2>
    <p className="lead mb-0">{props1.details}</p>
</div>
  )

}
