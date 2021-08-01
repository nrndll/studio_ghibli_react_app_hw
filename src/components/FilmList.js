import React from 'react';

const FilmList = ({films, onFilmChange}) => {

    if (!films[0]) {
        return (
            <>
                <h1>Studio Ghibli Films</h1>
                <h2>now loading...</h2>
            </>
        );
    }

    const ListOfFilms = films.map((film, index) => {
        return <option value={index} key={film.id}>{film.title}</option>
    });

    const handleChange = evt => {
        const selectedFilm = films[evt.target.value]
        onFilmChange(selectedFilm);
    };

    return (
        <>
            <h1>Studio Ghibli Films</h1>
            <select defaultValue="" onChange={handleChange}>
                <option value="" disabled>Select Film</option>
                {ListOfFilms}
            </select>
        </>
    );
}

export default FilmList;