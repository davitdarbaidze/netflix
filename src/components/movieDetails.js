import React from 'react'
import styles from '../styles/moviedetails.module.scss'

export default function MovieDetails({id, toggle, singleMovie}) {

  const handleClick = () => {
    toggle()
  }

  return (
      <div className={styles.container}>
        {singleMovie}
      <button onClick={handleClick}>X</button>
      </div>
  )
}
