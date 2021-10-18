import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;