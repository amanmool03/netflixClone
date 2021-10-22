import React from 'react'
import '../../styles/components/Details/movieFrame.scss'
export default function MovieFrame({ id }) {
    return (
        <div class="movie" >
            <iframe src={`https://autoembed.xyz/movie/tmdb/${id}`} title="W3Schools Free 	Online Web Tutorials" frameborder="0" scrolling="no" allowfullscreen="allowfullscreen" height="100%" width="100%">
            </iframe>

            {/* <iframe src={`https://www.2embed.ru/embed/tmdb/movie?id=${id}`} title="W3Schools Free 	Online Web Tutorials" frameborder="0" scrolling="no" allowfullscreen="allowfullscreen" height="100%" width="100%"> */}

        </div>
    )
}
