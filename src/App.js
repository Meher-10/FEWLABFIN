

import React,{useState} from 'react';
import Login from './components/Login';

import ContactUs from './components/ContactUs';
function App() {
  
const [user, setUser] = useState(null);
 
  return (
   
   <>
   {/* <Login/> */}
   <ContactUs/>
   </>
    
  );

}
export default App;
