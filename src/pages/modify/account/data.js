import React from 'react'
import styles from '@/styles/modify.module.scss'
import SiteHeader from '@/components/SiteHeader'

export default function Data() {
  return (
    <div className={styles.Wrapper}>
      <SiteHeader />
      <div className={styles.ModifyContainer}>
        <div className={styles.Data}>
          <div className={styles.Username}><button>Change Username</button></div>
          <div className={styles.Email}>some</div>
          <div className={styles.Phone}>some</div>
        </div>
      </div>
      
      </div>
  )
}
