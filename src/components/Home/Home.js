import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import '../../styles/components/Home/nav.scss'
import '../../styles/components/Home/banner.scss'
import requests from '../Requests'
import Row from './Row'
import Footer from './Footer'
export default function Home() {
    return (
        <div className='homeScreen'>

            <Nav />
            <Banner />

            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />


            <Row
                title='Trending Now'
                fetchUrl={requests.fetchTrending}

            />
            <Row
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}

            />
            <Row
                title='Action Movies'
                fetchUrl={requests.fetchActionMovies}

            />
            <Row
                title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}

            />
            <Row
                title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies}

            />
            <Row
                title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies}

            />
            <Row
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaryMovies}

            />


            <Footer />

        </div>
    )
}
