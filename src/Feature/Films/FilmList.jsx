import  styles  from "./Films.module.css";

export function FilmList({data}) {
  return (
    <div className={styles.card}>
      <h2>{data.title}</h2>
      <p>Director {data.director}</p>
      <img className={styles["poster"]} src={data.poster}/>
      <p>Released at {data.release_date}</p>

    </div>
  )};
