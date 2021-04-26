import React from 'react'

const Header = () => (
    <header className="site_header">

    <div className="header_title">
      <div className="header_title_text">
      F.E.M
      </div>
    </div>

    <div className="header_search">Search</div>
    <nav className="header_nav">
      <div className="nav_item">Home</div>
      <div className="nav_item">Recipe</div>
      <div className="nav_item">Blog</div>
      <div className="nav_item">About</div>
    </nav>
    <nav className="header_user">
      <div className="header_shop user_item">Shop</div>
      <div className="header_sep"></div>
      <div className="header_more user_item">More</div>
    </nav>
    <div className="header_line"></div>
  </header>
)

export default Header