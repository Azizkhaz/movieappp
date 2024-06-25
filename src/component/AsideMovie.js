import React from 'react'

const AsideMovie = () => {
  return (
    <aside className="sidebar">
    <div className="top-bar">
      <p className="logo">REPLEX</p>
    </div>
    <div className="search-box">
      <input type="text" placeholder="Search..." />
      <p className="fa fa-search" />
    </div>
    <menu className="menu">
      <p className="menu-name">Movie trailers</p>
      <ul>
        <li className="active">
          <a href="#">Action / Adventure</a>
          <ul>
            <li>
              <a href="#">Latest</a>
            </li>
            <li className="active">
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Coming soon</a>
            </li>
            <li>
              <a href="#">Staff picks</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Animation</a>
        </li>
        <li>
          <a href="#">Comedy</a>
        </li>
        <li>
          <a href="#">Documentaries</a>
        </li>
        <li>
          <a href="#">Drama</a>
        </li>
        <li>
          <a href="#">Horror</a>
        </li>
        <li>
          <a href="#">Sci-Fi / Fantasy</a>
        </li>
        <li>
          <a href="#">List A-Z</a>
        </li>
      </ul>
      <div className="separator" />
      <ul className="no-bullets">
        <li>
          <a href="#">Latest news</a>
        </li>
        <li>
          <a href="#">Critic reviews</a>
        </li>
        <li>
          <a href="#">Box office</a>
        </li>
        <li>
          <a href="#">Top 250</a>
        </li>
      </ul>
      <div className="separator" />
    </menu>
  </aside>
  )
}

export default AsideMovie