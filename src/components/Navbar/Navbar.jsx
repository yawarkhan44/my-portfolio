import React from 'react'
import "./Navbar.scss"
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
            <img src="" alt="" />
            <ul className="list">
                <li className="item">Home</li>
                <li className="item">About</li>
                <li className="item">Projects</li>
                <li className="item">Contact</li>
            </ul>
        </div>
        <div className="icons">
            <SearchIcon className="searchIcon"/>
            <button>Lets talk</button>
        </div>
    </div>
  )
}

export default Navbar