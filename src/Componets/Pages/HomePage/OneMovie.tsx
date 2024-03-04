import React from 'react'
import styles from "./OneMovie.module.css"


export type FilmType = {
    text: string
    image: string
    title: string
    posterUrl: string
    nameRU: string
    price: string
}

export const OneMovie =({image,title,price}: FilmType) => {
    const FAVORITS: any[] = []
    const add = (image: string, title: string, price: string) => {

        FAVORITS . push({
            "image": image,
            "title": title,
            "text": price
        })
        localStorage.setItem("storedBooks", JSON.stringify(FAVORITS))
    }
    return (
        <div className={styles .movie}>
        <img src={image} className={styles.image}></img>
        <a className={styles.name}>{title}</a>
        <a className={styles.genre}>{price}</a>
        <a className={styles.genre2} onClick={() => add(image, title, price)}></a>
        
        </div>
    )
}