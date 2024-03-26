import Link from 'next/link'
import React from 'react'
import styles from './navbarLink.module.css'
import { usePathname } from 'next/navigation'
const NavbarLink = ({item}) => {

    const pathName = usePathname()
    console.log(pathName)

  return (
    <Link href={item.path}
        key={item.title}
        className={`${styles.container} ${pathName === item.path && styles.active}`}
        >{item.title}</Link>
  )
}

export default NavbarLink