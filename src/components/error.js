import React from 'react'
import styles from '../styles/error.module.scss'

export default function Error(props) {
  return (
    <div className={styles.main}>{props.message}</div>
  )
}
