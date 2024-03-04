import React, { useEffect, useState } from 'react'
import styles from "./MoviesComponent.module.css"
import { FilmType } from './OneMovie'
import { OneMovie } from './OneMovie'

export const MoviesComponent = () => {
  const [data, setData] = useState<FilmType[]>([]);
  const [limit, setLimit] = useState(10);
  const POINTERS = [1, 2, 3, 4, 5];
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);

  const filteredMovies = data.filter(movie => {
    return movie.title.toLowerCase().includes(value.toLowerCase());
  });

  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/search/mongodb/${page}`)
      .then(res => res.json())
      .then(res => setData(res.books));
  }, [page]);

  return (
    <div className={styles.movies__block}>
      <div className={styles.changePageInput}>
        {
          POINTERS.map((index) => <button className={styles.buttonPage} onClick={() => setPage(index)}>{index}</button>)
        }
      </div>
      <input className={styles.searchInput} placeholder='Search' onChange={(event) => setValue(event.target.value)}></input>
      {
        filteredMovies.map(item => <OneMovie  {...item}></OneMovie>)
      }
    </div>
  );
}
