import React,{useState} from 'react'

const Text = () => {
   const [text,settext] = useState('Enter Text here')
   const uppercase =()=>{
     let set = text.toUpperCase();
     settext(set);
   }
   const low =()=>{
     let fnew = text.toLocaleLowerCase();
     settext(fnew);
     
   }


 

   const click =(e)=>{
        settext(e.target.value)
        
   }
  return (
    <div>
        <h1>Write and Text analysis</h1>
 <div className='container' >
  <textarea className="form-control form-control-lg" onChange={click} id="exampleFormControlTextarea1" value={text} rows="8" ></textarea>
 <button type="button" className="btn btn-primary" onClick={uppercase}>UpperCase</button>
<button type="button" className="btn btn-success" onClick={low}>LowerCase</button>
<button type="button" className="btn btn-danger" onClick={()=>settext("")}>Clear</button>
</div>
<h3>words</h3>
<p>{text}</p>
    </div>
  )
}

export default Text;