import React from 'react'
import styles from '../styles/loading.module.scss'

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
          <div className={styles.loading}></div>
    </div>
  )
}
