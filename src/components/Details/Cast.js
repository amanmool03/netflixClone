import React, { useEffect, useState } from 'react'
import '../../styles/components/Details/relatedMovie.scss'
import axios from '../axios'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Cast({ id }) {
    const API_KEY = "af957e10c0b0255b17d9eaa30de280fb";
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    var list = []

    for (let index = 0; index < 8; index++) {
        list.push(index);

    }

    const base_URL = "https://image.tmdb.org/t/p/original/";

    const fetchUrl = `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log('cast', request)
            setMovies(request.data.cast);
            setIsLoading(false);

            return request;
        }

        fetchData();
    }, [fetchUrl]);
    return (
        <div className="related_movies">
            <h2>Cast</h2>
            <div className="recommended-posters">
                {
                    isLoading ?
                        list.map(item => {
                            return (<div className='skeleton-row'></div>);
                        })

                        :
                        movies.slice(0, 10).map(movie => {
                            return (
                                <div className='recommended_link' >
                                    <LazyLoadImage effect="blur" className='recommended_poster' style={{ height: '200px' }} key={movie.id} src={`${base_URL}${movie.profile_path}`} alt={movie.name} />
                                    <div className='rec_info'>
                                        <p>{`${movie.name}`}</p>
                                        <p style={{ color: 'grey' }}>{`${movie.character}`}</p>
                                    </div>
                                </div>
                            );
                        })
                }

            </div>
        </div>
    )
}
