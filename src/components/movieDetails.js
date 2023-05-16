import React, {useEffect} from 'react'
import styles from '../styles/moviedetails.module.scss'

export default function MovieDetails(props) {

  const handleClick = () => {
    // props.toggle()
    console.log('click')
  }

  return (
      <div className={styles.container}>
        AdditionalInfo
        {props.id}
      <button onClick={handleClick}>close</button>  
      </div>
  )
}
