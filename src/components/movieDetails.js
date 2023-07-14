import React from 'react'
import styles from '../styles/moviedetails.module.scss'

export default function MovieDetails({id, toggle, singleMovie}) {

  const handleClick = () => {
    toggle()
    document.body.classList.remove('no-scroll');
  }

  return (
      <div className={styles.container}>
        {singleMovie}
      <button onTouchEnd={handleClick}>X</button>
      </div>
  )
}
