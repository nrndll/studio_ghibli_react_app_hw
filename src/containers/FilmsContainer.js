import React, {useState, useEffect} from 'react';
import FilmItem from '../components/FilmItem';
import FilmList from '../components/FilmList';

const FilmsContainer = () => {

    const [films, setFilms] = useState([]);
    const [film, setFilm] = useState({});

    useEffect(() => {
        getFilms()
    }, [])

    const getFilms = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(films => setFilms(films))
    }

    const onFilmChange = film => {
        setFilm(film);
    };



    return (
        <>
            <FilmList films={films} onFilmChange={onFilmChange} />
            <FilmItem film={film}/>
        </>
    );
}

export default FilmsContainer;