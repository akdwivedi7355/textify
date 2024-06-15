
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React ,{ useState } from 'react';
import Alert from './components/Alert';



function App() {
  const [mode,setMode] =useState('light');
  const [alert,setAlert]=useState('null');
  const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(()=>{
    setAlert(null)
    
   },1500)
  }
  const togglemode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black'
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils = Dark mode";
    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success");
      document.title="ytxtUtils = Light mode";
    }
  }
  return (  
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
      <TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      </div>

     </>
  );
  }
export default App;

