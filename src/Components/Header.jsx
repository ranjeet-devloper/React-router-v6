import { NavLink } from "react-router-dom";
import '../App.css';

let Header = ()=>{
    return<>
    <header className="header">
        
        <nav>
           <div className="header-nav">
            <img src="" alt="no pic"></img>
            <div className="list">
            <div className="list-item"><NavLink to="/">Home</NavLink></div>
            <div className="list-item"><NavLink to="/about">About</NavLink></div>
            <div className="list-item"><NavLink to="/contact">Contact</NavLink></div>
            </div>
          </div>
        </nav>
    </header>
    </>
}
export default Header;