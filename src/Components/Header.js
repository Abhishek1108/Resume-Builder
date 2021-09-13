import {NavLink} from 'react-router-dom';
import logo from "../Static/images/logo.png";
import * as authActions from "../Actions/authActions";
import {connect, useSelector} from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";



function LoggesOut(props) {

    return (
      <ul>
        <li className="signup ">
          <NavLink className=" btnv-1" to="/register">
          Register
          </NavLink>
        </li>
        <li className="signin"> 
          <NavLink className="text-blue btnv-3" to="/login">
          Sign In
          </NavLink>         
        </li>
      </ul>
    )
  }
  
  const Header = (props) => {
    // console.log(useSelector(state=>console.log(state)));
     const auth = useSelector(state => state.firebase.auth);
    console.log(props);
     const handleLogOut=()=>{
    props.signOut();
     }
    console.log(props); 
    return (  
    <header className="header">
    <nav className="nav">
        <a href="/" className="holder-logo">
          <img className='logo' src={logo}></img>
        </a> 
          <div className="header-links full-height">
  
          { isLoaded(auth) && !isEmpty(auth) ?<>
  
            <ul>
              <li className="signin ">
                <NavLink className="  " to="/">
                 Logged in as {auth.email}
                </NavLink>
              </li>
              <li className="signin"> 
                <button className="text-blue btnv-3" onClick={handleLogOut}>
               Signout
                </button>         
              </li>
            </ul>
  
          </>:<LoggesOut></LoggesOut>}
            
            <ul id="nav-mid">
              <li>
              <NavLink className="btn-nvt-gm" to="/resume-templates">
              Resume Templates
              </NavLink>
              </li> 
              <li className="holder-pricing">            
                <NavLink className="btn-nvt-gm" to="/aboutUs">
                About Us
                </NavLink>
              </li>        
            </ul>
              
        </div>   
      </nav>
    </header>
  
    );
  };
  
  const mapStateToProps=(state)=>{
    console.log(state);
    return{
       auth:state.firebase.auth
    }
  }
  const mapDispatchToProps= (dispatch)=>{
    return {
     signOut:()=>dispatch(authActions.signOut())
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Header);