import React from 'react';
import CustomeCarousel from '../carousel/Carousel';
import MainBody from '../../components/Layout/Body/MainBody';
import ContactusProvider from '../../Context/ContactusContext';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Layout/Header/Header';

const Home = () => {
    return ( 
        <ContactusProvider>
            <Header/>
            <CustomeCarousel/>
            <MainBody/>
            <ContactUs/>
        </ContactusProvider>
     );
}
 
export default Home;