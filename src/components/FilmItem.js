import React from 'react';

const FilmItem = ({film}) => {

    if(!film.title){
        return null
    }

    return (
        <>
            <h2>{film.title}</h2>
            <h3>{film.original_title} / {film.original_title_romanised}</h3>
            <ul>
                <li>Director: {film.director}</li>
                <li>Producer: {film.producer}</li>
                <li>Year of Release: {film.release_date}</li>
                <li>Running Time: {film.running_time} minutes</li>
            </ul>
            <article>{film.description}</article>

        </>
    )

    }

export default FilmItem;