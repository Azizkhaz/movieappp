import React from 'react'

const TopBar = () => {
  return (
    <div>
      <div className="top-bar">

<div className="profile-box">
  <div className="circle" />
  <span className="arrow fa fa-angle-down" />
</div>

<ul className="top-menu">
  <li className="menu-icon trigger-sidebar-toggle">
    <div className="line" />
    <div className="line" />
    <div className="line" />
  </li>
  <li>
    <a href="#">Headlines</a>
  </li>
  <li>
    <a href="#">Articles</a>
  </li>
  <li className="active">
    <a href="#">Movies &amp; Films</a>
  </li>
  <li>
    <a href="#">Television</a>
  </li>
  <li>
    <a href="#">Music</a>
  </li>
  <li>
    <a href="#">Celebrities</a>
  </li>
</ul>

</div>{" "}
{/* top bar */}
<div className="featured-movie">
<img
  className="cover"
  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/backdrop_ggwxvq_1.jpg"
  alt=""
/>
<p className="corner-title">Staff pick</p>
<div className="bottom-bar">
  <div className="title-container">
    <span className="fa fa-play-circle" />
    <b>Non-stop</b> Trailer #1
  </div>
  <div className="right">
    <div className="stars">
      <span className="fa fa-star" />
      <span className="fa fa-star" />
      <span className="fa fa-star" />
      <span className="fa fa-star-half-o" />
      <span className="fa fa-star-o" />
    </div>
    <div className="share">
      <icon className="fa fa-share-square" /> Share
    </div>
  </div>{" "}
  {/* right */}
</div>{" "}
{/* bottom bar */}
</div>{" "}
    </div>
  )
}

export default TopBar