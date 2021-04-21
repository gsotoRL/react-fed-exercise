import React from 'react';
import CustomeCarousel from './carousel/Carousel';
import MainBody from '../components/Layout/Body/MainBody';
import ContactusProvider from '../Context/ContactusContext';
import ContactUs from './ContactUs/ContactUs';

const App = () => {
    return ( 
        <ContactusProvider>
            <CustomeCarousel/>
            <MainBody/>
            <ContactUs/>
        </ContactusProvider>
     );
}
 
export default App;