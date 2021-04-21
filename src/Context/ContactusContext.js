import React, {createContext, useState} from 'react';

export const ContactusContext = createContext();
const  ContactusProvider = (props) => {

    const [showForm, setShowForm] = useState(false);

    return ( 
        <ContactusContext.Provider value={{showForm,setShowForm}}>
            {props.children}
        </ContactusContext.Provider>
     );
}
 
export default ContactusProvider;