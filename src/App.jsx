
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
 const [mode, setMode] =  useState('light') //wheather the dark mode is enabled or not
 const [alert,setAlert] = useState('null')

 const showAlert = (message, type)=>{
     setAlert({ 
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
 };
 const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark'); // Correctly update state
    document.body.style.backgroundColor = ' #000d1a'
    showAlert("dark mode enabled","success");
  } else {
    setMode('light'); // Correctly update state
     document.body.style.backgroundColor = 'white';
     showAlert("light mode enabled","success");
  }
};
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm  showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />
    {/* <About/> */}
    </>
  )
}

export default App;
