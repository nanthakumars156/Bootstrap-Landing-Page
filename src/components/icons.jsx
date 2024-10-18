import React from 'react'

export default function Icons(props) {
  return (
    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi-window m-auto text-primary"></i></div>
                            <h3>{props.titletag}</h3>
                            <p class="lead mb-0">{props.notetag}</p>
                        </div>
                    </div>
  )
}
