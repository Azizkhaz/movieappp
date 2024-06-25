import React from 'react'

const TitleBar = () => {
  return (
    <div>
       <div className="title-bar">
            <div className="left">
              <p className="bold">Popular Trailers</p>
              <p className="grey">Action / Adventure</p>
            </div>{" "}
            {/* left */}
            <div className="right">
              <a className="blue" href="#">
                Rating <i className="fa fa-angle-down" />
              </a>
              <a href="#">Newest</a>
              <a href="#">Oldest</a>
            </div>{" "}
            {/* right */}
          </div>{" "}
    </div>
  )
}

export default TitleBar