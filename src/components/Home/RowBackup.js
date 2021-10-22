import React, { useEffect, useState } from 'react'
import '../../styles/components/Home/row.scss'
import axios from '../axios'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
    Keyboard,
    Scrollbar,
    Pagination,
    Navigation,
} from 'swiper/core'

import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'



export default function Row({ title, fetchUrl, isLargeRow = false }) {

    const [movies, setMovies] = useState([]);

    const base_URL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className='row'>
            <h2>{title}</h2>
            {/* <div className="row-posters">
                {movies.map(movie => {
                    return (
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <img className={`row-poster ${isLargeRow && "row-posterLarge"}`} key={movie.id} src={`${base_URL}${isLargeRow ? movie.poster_path : movie.poster_path
                                }`} alt={movie.name} />
                        )
                    );
                })}
            </div> */}

            <Swiper className="row-posters"
                grabCursor
                keyboard={{ enabled: true }}
                pagination={{ clickable: true }}
                navigation
                spaceBetween={20}
                slidesPerView={8}
                loop

            >
                {movies.map((movie, index) => {
                    return (
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <SwiperSlide key={index}><img className={`row-poster ${isLargeRow && "row-posterLarge"}`} key={movie.id} src={`${base_URL}${isLargeRow ? movie.poster_path : movie.poster_path
                                }`} alt={movie.name} /></SwiperSlide>
                        )
                    );
                })}
            </Swiper>

        </div>
    )
}
