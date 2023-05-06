import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const [Text, setText] = useState("");

    const HandleUpClick=()=>
    {
 
        let newText=Text.toUpperCase();
        setText(newText);
    }

    const OnChange=(event)=>
    {
        setText(event.target.value)
    }
    const HandleloClick=()=>
    {
      
        let newText=Text.toLowerCase();
        setText(newText);
    }
   
    const HandleClear=()=>
    {
   
        setText("");
    }
    const count=(element)=>
    {
      return element.length!==0;
    }
   

    
  return (
    <>
<div  style={{color: props.mode==='dark'?'white':'black'}}>
<h1>  {props.textArea}</h1>

<div className="mb-3" >
    
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#343a40':'white',color: props.mode==='dark'?'white':'343a40'}} onChange={OnChange} value= {Text} id="TextBox" rows="10"></textarea>
</div >
<button disabled={Text.length===0} className="btn btn-primary my-1 mx-3" onClick={HandleUpClick}>Convert To UpperCase</button>
<button disabled={Text.length===0} className="btn btn-primary my-1 mx-3" onClick={HandleClear}>Clear</button>
<button disabled={Text.length===0} className="btn btn-primary my-1 mx-3" onClick={HandleloClick}>Convert To LowerCase</button>
</div>
<div className="container my-3 mx-2" style={{color: props.mode==='dark'?'white':'black'}}>
<h2>Summary</h2>

<p><b>{Text.split(" ").filter(count).length}</b> Words And <b>{Text.length}</b> Characters</p>
<p>Time Require to read: <b>{Text.split(" ").filter(count).length * 0.008-0.008} minutes </b>.</p>
<h3 className='my-3 '>Preview</h3>
<p>{Text}</p>

</div>
</>
  )}
TextForm.defaultProps={textArea:"Title Here"}
TextForm.propTypes = {textArea :  PropTypes.string}
