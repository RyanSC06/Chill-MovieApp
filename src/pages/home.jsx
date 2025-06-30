import { useEffect } from 'react'

import '../style/home.css'

import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'
import FilmSection from '../components/FilmSection'
import FeatureSection from '../components/FeatureSection'

import useFilmStore from '../store/FilmStore'

const Home = ({}) => {
    const { continueList, topList, trendingList, newList } = useFilmStore();

    useEffect(() => {
        document.getElementById('root').style.width = "100%"
    }, [])

    return (
        <>
        <MainHeader />

        <FeatureSection 
            imgPath     = {"/images/film/featured1.png"}
            title       = {"Duty After School"}
            description = {"Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."}
            minAge      = {"18"}
        />
        
        <main>
            <div className="film-display">
                <FilmSection 
                    sectionName  = {"Melanjutkan Tonton Film"} 
                    filmList     = {continueList}
                    isHorizontal = {true}
                />
                
                <FilmSection 
                    sectionName  = {"Top Rating Film dan Series Hari Ini"} 
                    filmList     = {topList}
                    isHorizontal = {false}
                />
                
                <FilmSection 
                    sectionName  = {"Film Trending"} 
                    filmList     = {trendingList}
                    isHorizontal = {false}
                />

                <FilmSection 
                    sectionName  = {"Rilis Baru"} 
                    filmList     = {newList}
                    isHorizontal = {false}
                />
            </div>
        </main>
        
        <MainFooter />
        </>
    )
}

export default Home