import React from 'react'
import './navbar.css'


const btn =()=>{
 document.body.style.background="#A9A9A9"


}
const btn1 =()=>{
  document.body.style.background="white"
 
}



  
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Utile-Text</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
        <span className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={btn} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Dark-mode</label>
</span><br></br>
<span className="form-check form-switch mx-2">
  <input className="form-check-input" type="checkbox" onClick={btn1} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">light-mode</label>
</span>

       
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;