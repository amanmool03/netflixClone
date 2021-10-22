import React, { useEffect, useState } from 'react'
import axios from '../axios'
import requests from '../Requests';

export default function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie)


    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + ' ...' : string;
    }


    return (
        <header className="banner" style={{ height: 600, background: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')` }}>
            <div className="bannerContainer">
                <h1 className="banner-title">{movie.title || movie.name || movie.original_name || ''}</h1>
                <p className="banner-desc">{truncate(movie.overview, 150)}</p>

                <div className="banner-btn">
                    <button className="btn"><i class="fas fa-play"></i>Play Movie</button>
                    <button className="btn"><i class="fas fa-info-circle"></i>More info</button>
                </div>
                <div className='banner-fadeRight'></div>
            </div>
            <div className='banner-fadeBottom'></div>

        </header>
    )
}
