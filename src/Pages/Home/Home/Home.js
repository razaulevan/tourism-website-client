import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TravelingBlogs from '../TravelingBlogs/TravelingBlogs';
import TravellingAccesories from '../TravellingAccesories/TravellingAccesories';

const Home = () => {
    return (
        <div id="home">

            <Banner></Banner>
            <Services></Services>
            <TravelingBlogs></TravelingBlogs>
            <TravellingAccesories></TravellingAccesories>

        </div>
    );
};

export default Home;