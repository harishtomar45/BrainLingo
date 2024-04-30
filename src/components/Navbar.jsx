import React from 'react'

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg ">
  <div className="container ">
   <div>
   
   <a className="navbar-brand fw-bold" href="#">BrainyLingo</a>

   </div>
   <div>
   <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Leaderboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-disabled="true">daily Quiz</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-primary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gener
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        
      
      </ul>
    
    </div>
   </div>

    <button className='btn btn-primary rounded-pill'>Sing Out</button>
  </div>
</nav>

    </>
  )
}

export default Navbar