import React from 'react'
import styles from '../styles/moviedetails.module.scss'

export default function MovieDetails({id, toggle}) {

  const handleClick = () => {
    // props.toggle()
    console.log(id)
    toggle()
  }

  return (
      <div className={styles.container}>
        AdditionalInfo
        {id}
      <button onClick={handleClick}>close</button>  
      </div>
  )
}
