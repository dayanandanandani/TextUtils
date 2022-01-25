import React, {useState} from 'react';

export default function Textform(props) {

    // const handleUpClick = ()=>{
    //     // console.log("Uppercase was clicked" + text)
    //     let newText = text.toUpperCase();
    //     setText(newText);
    // }

    // const handleOnChange = (event)=>{
    //     // console.log("On change")
    //     setText(event.target.value)
    // }

    const handleUpClick = ()=>
    {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleOnChange = (event)=>
    {
        setText(event.target.value)
    }

    const handleLowClick = ()=>
    {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    // const handleCapitalClick = ()=>
    // {
    //     let firstChar = text.charAt(0);
    //     let newText = firstChar.toUpperCase();
    //     setText(newText+text.slice(1));
    // }

    const handleClearClick = ()=>
    {
        let newText = ('');
        setText(newText);
        props.showAlert("Text cleared", "success");

    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }
    
    const [text, setText] = useState('');
    //setText("Dayanand");
    return( 
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h2 >{props.heading}</h2>
        <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white', color: props.mode==='dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
        
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleCapitalClick}>Convert to Capitalcase</button> */}
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        <button className= "btn btn-primary mx-2" onClick={handleCopy}> Copy Text</button>
        <button className= "btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>


    </div>

        <hr />

    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
