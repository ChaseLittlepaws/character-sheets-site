import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './header.module.css'
import photosIcon from '/src/images/photosIcon.png';
import favoritesIcon from '/src/images/favoritesIcon.png';
import storiesIcon from '/src/images/storiesIcon.png';
import blogsIcon from '/src/images/blogsIcon.png';
import storeIcon from '/src/images/storeIcon.png';
import socialsIcon from '/src/images/socialsIcon.png';

const Header = ({ }) => {
  return (
    <><div className={container}>
          <nav>
              <ul className={navLinks}>
                  <li className={navLinkItem}>
                      <Link to="/photos" className={navLinkText}>
                          <img src={photosIcon} alt="" style={{ width: '105px', height: 'auto' }} />
                      </Link>
                      <Link to="/photos" className={navLinkText}>
                          Photos
                      </Link>
                  </li>
                  <li className={navLinkItem}>
                      <Link to="/favorites" className={navLinkText}>
                          <img src={favoritesIcon} alt="" style={{ width: '105px', height: 'auto' }} />
                      </Link>
                      <Link to="/favorites" className={navLinkText}>
                          Favorites
                      </Link>
                  </li>
                  <li className={navLinkItem}>
                      <Link to="/stories" className={navLinkText}>
                          <img src={storiesIcon} alt="" style={{ width: '105px', height: 'auto' }} />
                      </Link>
                      <Link to="/stories" className={navLinkText}>
                          Stories
                      </Link>
                  </li>
                  <li className={navLinkItem}>
                      <Link to="/blogs" className={navLinkText}>
                          <img src={blogsIcon} alt="" style={{ width: '105px', height: 'auto' }} />
                      </Link>
                      <Link to="/blogs" className={navLinkText}>
                          Blogs
                      </Link>
                  </li>
                  <li className={navLinkItem}>
                      <Link to="/store" className={navLinkText}>
                          <img src={storeIcon} alt="" style={{ width: '105px', height: 'auto' }} />
                      </Link>
                      <Link to="/store" className={navLinkText}>
                          Store
                      </Link>
                  </li>
                  <li className={navLinkItem}>
                      <Link to="/socials" className={navLinkText}>
                          <img src={socialsIcon} alt="" style={{ width: '105px', height: 'auto' }} />
                      </Link>
                      <Link to="/socials" className={navLinkText}>
                          Socials
                      </Link>
                  </li>
              </ul>
          </nav>
      </div>
      </>
  )
}

export default Header