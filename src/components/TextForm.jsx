/* eslint-disable react/prop-types */

import { useState } from "react";

import PropTypes from 'prop-types'

function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();  //Uppercase
        setText(newText)
       
        props.showAlert("Coverted to uppercase","success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase(); //Lowecase
        setText(newText)
       
        props.showAlert("Coverted to lowecase","success")
    }
    const handleClearClick = ()=>{
        let newText = '';              //clear the text
        setText(newText)
       
        props.showAlert("cleared text successfully","success")
    }
    const handleOnchange = (event)=>{
        setText(event.target.value)

    }
    const handleCopy = ()=>{
      var text = document.getElementById("myBox");   //copy text
      text.select();
      navigator.clipboard.writeText(text.value)
     
      props.showAlert("Copied to Clipboard","success")
    }

    const handleExtraSpaces =()=>{
      let newText = text.split(/[ ]+/);    // remove extra spaces
      setText(newText.join(" "))
     
      props.showAlert("Remove Extra spaces","success")
    }


    const [text, setText] = useState('')
  return (
    <>
   
<div className=" container mb-3 my-3 " style={{color: props.mode==='dark'?'white':'black'}} >
  <label htmlFor="myBox" className="form-label">{props.heading}</label>
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#000d1a':'white', color : props.mode==='dark'?'white':'black'}} id="myBox" placeholder="Enter your text" rows="8"></textarea>
  <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to uppercase</button>
  <button className='btn btn-primary my-3 mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
  <button className='btn btn-primary my-3 mx-1' onClick={handleClearClick}>Clear the text</button>
  <button className='btn btn-primary my-3 mx-1' onClick={handleCopy}>Copy the text</button>
  <button className='btn btn-primary my-3 mx-1' onClick={handleExtraSpaces}>remove the space</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
  <h2>Your heading summary</h2>
  <p>{text.split(" ").length} Words and {text.length} characters</p>
  <h2>preview</h2>
  <p>{text}</p>

</div>
   </>
  )
}



TextForm.propTypes = {heading: PropTypes.string}

export default TextForm;
