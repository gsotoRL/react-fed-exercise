import React, {useContext} from 'react';
import {ContactusContext} from '../../../Context/ContactusContext';

const MainBody = () => {
    
    const {setShowForm} = useContext(ContactusContext);

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-8">
                    <h2 className="colorDarkOrange">To the Contrary</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div>
                        <ul>
                            <li>Discovered the undoubtable source.</li>
                            <li>Lorem Impsum comes from section 1.10.32 abd 1.10.33</li>
                        </ul>
                    </div>
                    <hr/>
                    <h2 className="colorDarkOrange">Treatise</h2>
                    <p>In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                    <div>
                        <ul>
                            <li>De Finibus Bonomrum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC</li>
                            <li>Lorem Impsum comes from section 1.10.32 abd 1.10.33</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <button className="btn btn-lg btn-primary float-right btn-block" onClick={() => {setShowForm(true)}}>Contact Us</button>
                </div>
                
            </div>
        </div>
     );
}
 
export default MainBody;