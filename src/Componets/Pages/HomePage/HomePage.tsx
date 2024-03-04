import React from 'react'
import styles from "./HomePage.module.css"


import { MoviesComponent } from './MoviesComponent'

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>

      <MoviesComponent />

    </div>
  )
}
