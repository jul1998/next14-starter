import React from 'react'
import Link from 'next/link'
import styles from './links.module.css'
import NavbarLink from './navLink/navbarLink'
const Links = () => {

    const links = [
        { title: 'Home Page', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Blog', path: '/blog'}
    ]

      //Temporary
    const session = true
    const isAdmin = false

  return (
    <div className={styles.links}>
        {links.map((link) => (
            <NavbarLink key={link.title} item={link} />
        ))} {
            session ? (
                <>
                  {isAdmin && <NavbarLink item={{ title: 'Admin', path: '/admin' }} />}
                  <button >Logout</button>
                </>
            ) : (
              <NavbarLink item={{ title: 'Login', path: '/login' }} />
            )
        }
    </div>
  )
}

export default Links