import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase", "success");
    }
    const handleLowclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase", "success");
    }
    const clearText = ()=>{
        setText("");
        props.showAlert("Text cleared", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }

    const ExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "success");
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
</div>
<button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>Convert to Uppercase</button>
<button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowclick}>Convert to Lowercase</button>
<button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
<button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={ExtraSpaces}>Remove Extra Spaces</button>
<button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
    