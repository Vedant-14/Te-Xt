import React,{useState} from 'react';
function TextArea(props) {
    const [text,setText] = useState("");
    //NOW HERE IF YOU WANT TO CHANGE THE TEXT VARIABLE VALUE THEN YOU NEED TO MAKE USE OF SET TEXT FUNCTION ONLY YOU CAnt change the text variable directly 
    const handleOnClick= () => {
        if(countWords(text)!==0) {
            props.showAlert("Converted to Uppercase Success ! ","success");
            let newText = text.toUpperCase();
            setText(newText);
        }
        
    }
    const handleOnChange=(event) => {
        
        setText(event.target.value);
    }
    const handleOn = () => {
        if(countWords(text)!==0) {
            let newText = text.toLowerCase();
            setText(newText);
         props.showAlert('Text converted to Lowercase !','success');
        }
        
    }
    const handleCopyClick = () => {
        if(countWords(text)!==0) {
            props.showAlert("Text copied Successfully ! ","success");
             navigator.clipboard.writeText(text)
        }
        
    };
    const handleClearClick = () => {
        if(countWords(text)!==0) {
            props.showAlert("Text has been cleared","danger");
            setText(" ");
        }
        
    }
    // const handleRemoveExtraSpaceClick = () => {
    //     text.trim();
        
    // }
    function countWords(text) {
        const arr = text.split(" "); // Spliting the text at spaces and making the array of words 

        return arr.filter(word => word!=="").length;
          
    }
    // function countCharacter(text) {
    //     const arr = text.split(" ");
        
    // }
    // const handleExtraSpaceClick = () => {
        
    //    let newText= text.trimWhiteSpace();
        
    //     setText(newText);
    // }
    return (
        <>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black' }}>
            <h3>{props.heading}</h3>
            <div className = "mb-3" >
                <textarea className= "form-control" onChange={handleOnChange} id="myBox" rows = "8" value={text} style={{backgroundColor:props.mode==='dark'?'#22253f':'white',color:props.mode==='dark'?'white':'black'}}>
                </textarea>
                <button className= {`btn btn-${props.mode==='primary'?'dark':'primary'}  mx-1  my-1`} onClick={handleOnClick}>Convert To Uppercase</button>
                <button className = {`btn btn-${props.mode==='primary'?'dark':'primary'}  mx-1  my-1`} onClick = {handleOn}>Convert to Lowercase</button>
                <button className = {`btn btn-${props.mode==='primary'?'dark':'primary'}  mx-1  my-1`} onClick = {handleCopyClick}>Copy text</button>
                <button className = {`btn btn-${props.mode==='primary'?'dark':'primary'}  mx-1  my-1`} onClick = {handleClearClick}>Clear Text</button>
                {/* <button className = {`btn btn-${props.mode==='primary'?'dark':'primary'}  mx-1  my-1`} onClick = {handleRemoveExtraSpaceClick}>Remove Extra Space</button> */}
                {/* <button className  = "btn btn-primary mx-1" onClick = {handleExtraSpaceClick}>Remove Extra Space</button> */}
            </div>
        </div>
        <div className = "container my-3" style={{color:props.mode==='dark'?'white':'black'}}> 
        {/* my-3 int the above means margin acording to y axis ie it will maintain some distance from above container */}
        <h1>Your text Summary :  </h1>
        <p>Total Words : {countWords(text)}, Total characters : {text.trim().length}</p>
        <p>{0.08*countWords(text)} Minutes to read</p>
        <h2> Preview </h2>
        <p>{text.length>0?text:"Enter something in the text box to preview"}</p>
        </div>
        </>
    );
    
}
export default TextArea;