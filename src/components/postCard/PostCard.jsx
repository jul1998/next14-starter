import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
const PostCard = ({post}) => {
  return (
     <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image src="https://images.unsplash.com/photo-1711639105861-f55ef78adc51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt="post" fill />
          </div>
          <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}> {post.body}</p>
          <Link className={styles.link} href="/blog/post"> Read More</Link>
        </div>


    </div>
  )
}

export default PostCard