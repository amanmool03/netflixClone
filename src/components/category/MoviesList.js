
import '../../styles/components/Category/movieList.scss'
import Nav from './Nav'
import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Footer from '../Home/Footer';
import logo from '../../images/logo.svg'
import avatar from '../../images/avatar.png'
import { useHistory } from 'react-router';

export default function MoviesList() {

    // nav
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])


    // movies

    const API_KEY = "af957e10c0b0255b17d9eaa30de280fb";
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    var list = []

    for (let index = 0; index < 8; index++) {
        list.push(index);

    }

    const base_URL = "https://image.tmdb.org/t/p/original/";

    const fetchUrl = `/discover/movie?api_key=af957e10c0b0255b17d9eaa30de280fb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

    const searchURL = `/search/movie?api_key=af957e10c0b0255b17d9eaa30de280fb&language=en-US&page=1&include_adult=false&query=`;
    useEffect(() => {


        fetchData(fetchUrl);
    }, [fetchUrl]);

    async function fetchData(API) {
        const request = await axios.get(API);

        setMovies(request.data.results);
        console.log(request.data.results)
        setIsLoading(false);

        return request;
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(searchURL + searchTerm)
        fetchData(searchURL + searchTerm)
        setSearchTerm('')

    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className='movieList'>
            <div className={`nav ${show && 'nav__black'}`}>
                <div className='nav__container'>
                    <div className='logo'><img src={logo} alt="" onClick={() => history.push('/')} /></div>
                    <form onSubmit={handleOnSubmit}><input type='search' value={searchTerm} onChange={handleOnChange} placeholder='search..' className='search' /></form>
                    <div className='avatar'> <img onClick={() => history.push('/profile')} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' alt="" /></div>
                </div>
            </div>

            <div className="movies_item">

                <div className="movieList-posters">
                    {
                        isLoading ?
                            list.map(item => {
                                return (<div className='skeleton-row'></div>);
                            })

                            :
                            movies.map(movie => {
                                return (
                                    <Link to={`${movie.id}`} className='movieList_link' > <LazyLoadImage effect="blur" className='movieList_poster' key={movie.id} src={`${base_URL}${movie.poster_path}`} alt={movie.name} /></Link>
                                );
                            })
                    }

                </div>
            </div>

            <Footer />

        </div>
    )
}
