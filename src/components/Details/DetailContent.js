import React, { useEffect, useState } from 'react'
import axios from '../axios'

export default function DetailContent({ id }) {
    const API_KEY = "af957e10c0b0255b17d9eaa30de280fb";
    const [movies, setMovies] = useState({});

    const base_URL = "https://image.tmdb.org/t/p/original/";

    const fetchUrl = `/movie/${id}?api_key=${API_KEY}`
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request)
            setMovies(request.data);
            return request;
        }

        fetchData();
    }, [fetchUrl]);
    return (
        <div className='details_content'>
            <img className='details_img' src={`${base_URL}${movies.poster_path}`} alt="" />
            <div className='details_info'>
                <div className='details_info_content'>
                    <div className='info_header'>
                        <h1 className='details_title'>{movies.title || movies.name || movies.original_name}</h1>
                        <p className='details_subtitle'>{movies.release_date} | {movies.runtime}min | {movies.original_language} </p>
                    </div>
                    <span className='rating'>{`${movies.vote_average % 1 === 0 ? movies.vote_average + '.0' : movies.vote_average}`}  <i class="fas fa-star" style={{ color: 'yellow' }}></i></span>

                </div>

                <h2 className='overview_title'>OVERVIEW</h2>
                <p className='overview_desc'>{movies.overview}</p>
                {/* <p className='overview_items'> <span style={{ color: 'gray' }}>Genres: </span> {movies.genres.map((item, index) => (index > 0) ? item.name + ', ' : '')} </p> */}
                <p className='overview_items'> <span style={{ color: 'gray' }}>Status: </span> {movies.status} </p>
                <p className='overview_items'> <span style={{ color: 'gray' }}>Budget: </span> {movies.budget} </p>
                <p className='overview_items'> <span style={{ color: 'gray' }}>Revenue: </span> {movies.revenue} </p>
            </div>
        </div>
    )
}
