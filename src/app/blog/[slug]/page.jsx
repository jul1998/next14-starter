import React from 'react'
import styles from './singlePost.module.css'

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
         asdasdasd
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
             adasdasd
            </span>
          </div>
        </div>
        <div className={styles.content}>1</div>
      </div>
    </div>
  )
}

export default SinglePostPage