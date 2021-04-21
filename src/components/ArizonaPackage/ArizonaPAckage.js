import React from 'react';
import Header from '../Layout/Header/Header';
import img from '../../img/blogging-guide-unsplash.jpg';

const ArizonaPackage = () => {
    return ( 
        <>
        <Header/>
        <div data-testid="arizonaComponent" className="container mt25">
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <h3 className="colorDarkOrange">Arizona Package</h3>
                    <img src={img} alt="Arizona Package" className="ing-thumbnail rounded w-100"/>
                </div>
                <div className="col-sm-12 col-md-7 mtb25">
                    <h4 className="colorDarkOrange">Phoenix</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <h4 className="colorDarkOrange">Sedona</h4>
                    <ul>
                        <li>De Finibus Bonomrum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC</li>
                        <li>Lorem Impsum comes from section 1.10.32 abd 1.10.33</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ArizonaPackage;