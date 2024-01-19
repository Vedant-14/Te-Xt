// import {Link} from "react-router-dom"
function Nav(props) {
    const myStyle = {
        display:"flex",
        listStyle : "none",
        cursor:"pointer",
        
        
    };
    return (
        <nav className = {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid" style={{color:props.mode==='dark'?'white':'black'}}>
                <ul style={myStyle}>
                    <li className="mx-3 " style={{fontSize:"20px"}} > 'Te-Xt' </li>
                    <li className="mx-3"> Home </li>
                    <li className="mx-3 ">AboutUs</li>
                </ul>
            </div>
            <div className = "d-flex">
                <div className=" bg-primary rounded mx-2" style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>{props.toggleMode2('primary')}}></div>
                <div className=" bg-danger rounded mx-2" style={{height:"30px" ,width:"30px",cursor:"pointer"}} onClick={()=>{props.toggleMode2('danger')}}></div>
                <div className ="bg-warning rounded mx-2" style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>{props.toggleMode2('warning')}}></div>
                <div className="bg-success rounded mx-2" style={{height:"30px",width:"30px", cursor:"pointer"}} onClick={()=>{props.toggleMode2('success')}}></div>
                <div className="bg-dark rounded mx-2" style={{height:"30px",width:"30px", cursor:"pointer"}} onClick={()=>{props.toggleMode2('dark')}}></div>
                <div className="bg-light rounded mx-2" style={{height:"30px",width:"30px", cursor:"pointer"}} onClick={()=>{props.toggleMode2('light')}}></div>

                
            </div>
            {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
                <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
            </div> */}
            {/* <div className={`form-check form-switch text-${props.mode==='light'?'red':'light'} mx-2`}>
                <input className="form-check-input" onClick = {()=>props.toggleMode2(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">RedMode</label>
            </div> */}
            {/* <div className = {`form-check form-switch text-${props.mode==="light"?"blue":"light"} mx-2`}>
                <input className = "form-check-input" onClick={props.toggleBlueMode} type="checkbox" role="switch"/>
                <label className = "form-check-label" htmlfor="flexSwitchCheckDefault">BlueMode</label>
            </div> */}
        </nav>
    )
}
export default Nav;