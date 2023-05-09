import { useEffect, useState } from "react";
import { FilmList } from "./FilmList";
import  styles  from "./Films.module.css";



export function Films() {
  const [film, setFilm] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/films")
      .then((res) => res.json())
      .then((data) => {
        setFilm(data);
      });
  }, []);

  return (
    <>
      <ul className={styles.container}>{film && film.map((x) => <FilmList key = {x.id} data={x}/>)}</ul>
    </>
  )}