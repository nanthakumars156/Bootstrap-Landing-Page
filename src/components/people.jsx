import React from 'react'

export default function People(props2) {
  return (
    <div className="col-lg-4">
     <div className="testimonial-item mx-auto mb-5 mb-lg-0">
        <img className="img-fluid rounded-circle mb-3" src={props2.test} alt="..." />
        <h5>{props2.name}</h5>
        <p className="font-weight-light mb-0">{props2.feedback}</p>
    </div>
</div>
  )
}
