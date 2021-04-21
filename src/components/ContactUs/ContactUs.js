import React, {useState, useContext, useEffect} from 'react';
import {ContactusContext} from '../../Context/ContactusContext';

const ContactUs = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    const [contactInfo, setContactInfo] = useState({
        name:'',
        email:'',
        commnets:''
    });
    const {showForm,setShowForm} = useContext(ContactusContext);

    const handleSubmit = e => {
        e.preventDefault()
        console.log('Contact information saved');
        setShowForm(false);
    }

    const getContactInfo = e => {
        setContactInfo({...contactInfo, 
                        [e.target.name] : e.target.value
                    });
    }

    if(!showForm) return null;

    return ( 
        <div className="contactusForm border border-dark row w-25 rounded p-3">
            <form onSubmit={handleSubmit}>
                <h4 className="colorDarkOrange">Contact Us</h4>
                <div className="pb-3">
                    <label>
                        Name:
                        <input type="text"
                                name="name"
                                placeholder="Your Name here"
                                value={contactInfo.name}
                                onChange={getContactInfo}
                                className="ml-3"/>
                    </label>
                    <label>
                        Email:
                        <input type="text"
                                name="email"
                                placeholder="Your Email here"
                                value={contactInfo.email}
                                onChange={getContactInfo}
                                className="ml-3"/>
                    </label>
                </div>
                <div>
                    <label className="align-top">Coments:</label>
                    <textarea
                            name="comments"
                            placeholder="Your Comments here"
                            value={contactInfo.comments}
                            onChange={getContactInfo}
                            className="ml-5"/>
                </div>
                
                <div className="text-center">
                    <button className="btn btn-md btn-primary" onClick={() => {setShowForm(false)}}>Cancel</button>
                    <button className="btn btn-md btn-primary ml-5" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
        
     );
}
 
export default ContactUs;