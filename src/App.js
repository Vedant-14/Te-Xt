// import logo from './logo.svg';
import './App.css';
import TextArea from './MyComponent/TextArea';
import Nav from './MyComponent/Nav';
import React,{useState} from 'react';
import Alert from './MyComponent/Alert';

// import AboutUs from './MyComponent/AboutUs';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const toggleMode = () => {
  //   if(mode==='light') {
  //     setMode("dark");
  //     document.body.style.backgroundColor="black";
  //     showAlert("Enabled Dark mode","success");
  //   }
  //   else {
  //     setMode("light");
  //     document.body.style.backgroundColor="white";
  //     showAlert("Enabled Light mode","success");
  //   }
  // };
  const removeColor =()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }
  const toggleMode2 = (cls) => {
    removeColor();
    setMode(cls);
    document.body.classList.add("bg-"+cls);
    // if(mode==='light') {
    //   setMode("red");
    //   document.body.style.backgroundColor = "red";
    //   showAlert("Enabled Red Mode","success");
    // }
    // else {
    //   setMode("light");
    //   document.body.style.backgroundColor="white";
    //   setAlert("Enabled Light Mode","success");
    // }
  };
  // 
  

  document.styleSheets.backgroundColor = "black"
  return (<>
    <Nav mode= {mode}  toggleMode2={toggleMode2} />
    <Alert alert={alert}/>
    <TextArea showAlert={showAlert} heading = "Please enter the text in the below box " mode = {mode} />
    {/* <Routes>
      <Route path="/" element = { }/>
      <Route path="/aboutus" element={<AboutUs/>} />
   
    </Routes> */}
    </>
  );
}

export default App  ;

