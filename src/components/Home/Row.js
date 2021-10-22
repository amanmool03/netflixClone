import React, { useEffect, useState } from 'react'
import '../../styles/components/Home/row.scss'
import axios from '../axios'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Row({ title, fetchUrl, isLargeRow = false }) {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    var list = []

    for (let index = 0; index < 8; index++) {
        list.push(index);

    }


    const base_URL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);

            return request;
        }

        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row-posters">
                {
                    isLoading ?
                        list.map(item => {
                            return (<div className='skeleton-row'></div>);
                        })

                        :
                        movies.map(movie => {
                            return (
                                ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                                    <Link to={`${movie.id}`} className='row_link' > <LazyLoadImage effect="blur" className={`row-poster ${isLargeRow && "row-posterLarge"}`} key={movie.id} src={`${base_URL}${isLargeRow ? movie.poster_path : movie.poster_path
                                        }`} alt={movie.name} /></Link>

                                )
                            );
                        })
                }

            </div>



        </div >
    )
}
