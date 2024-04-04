"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./links.module.css";
import NavbarLink from "./navLink/navbarLink";
import Image from "next/image";

const links = [
  { title: "Home Page", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  //Temporary
  const session = true;
  const isAdmin = false;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavbarLink key={link.title} item={link} />
        ))}{" "}
        {session ? (
          <>
            {isAdmin && (
              <NavbarLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavbarLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuButton}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavbarLink key={link.title} item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
