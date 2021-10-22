import React, { useEffect, useState } from 'react'
import '../../styles/components/Details/details.scss'

import Footer from '../Home/Footer';
import Nav from '../Home/Nav';
import Cast from './Cast';
import DetailContent from './DetailContent';
import MovieFrame from './MovieFrame';
import RelatedMovie from './RelatedMovie';

export default function Detail({ match }) {



    return (
        <div className='details'>
            <Nav />

            <DetailContent id={match.params.id} />
            <MovieFrame id={match.params.id} />
            <Cast id={match.params.id} />
            <RelatedMovie id={match.params.id} />

            <Footer />
        </div>
    )
}
