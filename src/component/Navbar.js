import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//Navbar Component
function Navbar(){
    return(
      <nav className="navbar">
        <div className="navbar__s1">
            <h1>Udemy</h1>
        </div>
        <div className="navbar__s2">
           <FontAwesomeIcon icon={faMagnifyingGlass} />
           <input type="text" name="search" id="search" placeholder="Search for anything here. Tech,Business,Art.," />
        </div>
        <div className="navbar__s3">
          <p>Courses</p>
          <p>My Learning</p>
          {/* <div className='my_learning'>
            <p>My Learning</p>
            <di className="my_learning__popup">
              You did not purchase anything yet
            </di>
          </div> */}
          <p><FontAwesomeIcon icon={faCartShopping} /></p>
          <p><FontAwesomeIcon icon={faBell} /></p>
          <p><FontAwesomeIcon icon={faUser} /></p>
        </div> 
        <div className="navbar__s4">
          <p><FontAwesomeIcon icon={faBars} /></p>
        </div> 
      </nav>
    );
  }

  export default Navbar;