import React, { useEffect, useState } from 'react'
import '../../styles/components/Details/relatedMovie.scss'
import axios from '../axios'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function RelatedMovie({ id }) {
    const API_KEY = "af957e10c0b0255b17d9eaa30de280fb";
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    var list = []

    for (let index = 0; index < 8; index++) {
        list.push(index);

    }

    const base_URL = "https://image.tmdb.org/t/p/original/";

    const fetchUrl = `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request)
            setMovies(request.data.results);
            setIsLoading(false);

            return request;
        }

        fetchData();
    }, [fetchUrl]);
    return (
        <div className="related_movies">
            <h2>Recommended Movies</h2>
            <div className="recommended-posters">
                {
                    isLoading ?
                        list.map(item => {
                            return (<div className='skeleton-row'></div>);
                        })

                        :
                        movies.slice(0, 10).map(movie => {
                            return (
                                <Link to={`${movie.id}`} className='recommended_link' > <LazyLoadImage effect="blur" className='recommended_poster' key={movie.id} src={`${base_URL}${movie.poster_path}`} alt={movie.name} /></Link>
                            );
                        })
                }

            </div>
        </div>
    )
}
