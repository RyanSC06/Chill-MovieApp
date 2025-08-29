import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import '../style/home.css'

import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'
import FilmSection from '../components/FilmSection'
import FeatureSection from '../components/FeatureSection'

// import useFilmStore from '../store/FilmStore'
import { useFilmsLists } from "../hooks/useFilmsLists";

const shuffleList = (list) => {
    return list.sort(() => Math.random() - 0.5)
}

const Home = ({}) => {
    // const { continueList, topList, trendingList, newList } = useFilmStore();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        if (params.get("register") === "success") {
            alert("Registrasi berhasil!");
            navigate("/home", { replace: true }); 
        }

        if (params.get("login") === "success") {
            alert("Selamat datang kembali!");
            navigate("/home", { replace: true });
        }
    }, [location, navigate]);

    const { lists, loading } = useFilmsLists (
        JSON.parse(localStorage.getItem("token")).userID);
    if (loading) {
        return <div>Loading...</div>;
    }
    const continueList = shuffleList(lists?.continueList) || [];
    const topList      = shuffleList(lists?.topList) || [];
    const trendingList = shuffleList(lists?.trendingList) || [];
    const newList      = shuffleList(lists?.newList) || [];

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