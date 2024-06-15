import React,{useState} from 'react';
import './Style.css';
export default function TextForm(props) {
  const [text , settext]=useState('');
  // const [isBold, setIsBold] = useState(false);
  
  const handleUpclick= ()=>{
    console.log("Uppercase was clicked");
    let newText=text.toUpperCase()
    settext(newText)
    props.showAlert("Converted to Uppercase!","succcess")
  }
  const handleLowclick =()=>{
   let newText=text.toLowerCase()
   settext(newText)
   props.showAlert("Converted to lowercase!","succcess")
  }
  const cleartext =()=>{
    let newText='';
    settext(newText);
    props.showAlert("Cleared text","succcess")
  }
  const handleOnchange=(event)=>{ 
    settext(event.target.value);
  }
  

  // const toggleBold = () => {
  //   setIsBold(!isBold);
  // };
   
  // const textStyle = { 
  //   fontWeight: isBold ? 'bold' : 'normal',
   
  // }
  const handleCopy=()=>{
    var Text =document.getElementById("exampleFormControlTextarea1");
    Text.select();
    navigator.clipboard.writeText(Text.value)
    props.showAlert("Copied to clipboard","succcess")
  }
  const handleextraspaces =()=>{
    let newtext =text.split(/[ ]+/)
    settext(newtext.join(" "))
    props.showAlert("Extra spaces removed","succcess")
  }
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
  <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor : props.mode 
  === 'dark'?'rgb(204, 190, 171)':'white',color:props.mode === 'dark'?'white':'#042743'}}
  // style={textStyle}  
   id="exampleFormControlTextarea1" rows="8"></textarea>
</div>

<button type="button"className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button> 
    <button type="button" className="btn btn-danger mx-1"onClick={handleLowclick}>Convert to lowercase</button> 
    <button type="button" className="btn btn-info mx-2"onClick={cleartext}>Clear Text</button>  
    {/* <button type="button" className="btn btn-info" onClick={toggleBold}>Bold Text</button> */}
    <button type="button" className="btn btn-success mx-2"onClick={handleCopy}>Copy Text</button> 
    <button type="button" className="btn btn-info mx-2"onClick={handleextraspaces}>Remove Extra spaces</button> 
    </div>
   <div className="container"style={{color:props.mode === 'dark'?'white':'#042743'}}>
    <h1>Text Summary</h1>
    <p>{ text.length===0?"0":text.split(" ").length} words and {text.length} characters</p>
    <p>{0.08*text.split(" ").length} minutes to read</p>
<h1>Preview</h1>
<p>{text.length>0?text:"Enter something in the the above textbox to preview here"}</p>
   </div>
     </>
  )
}
