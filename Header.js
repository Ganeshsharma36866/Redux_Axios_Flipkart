import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-dropdown';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className="container">
        <div className='d-flex center'>
          <div style={{}}>
            <i style={{ fontWeight: 800, color: "white", fontSize: 24 }}>Flipkart</i><br /><i style={{ fontWeight: 600, color: "white" }}>explore </i><i style={{ color: "yellow" }}>Plus</i>
          </div>
          <div className="input-group" style={{marginLeft:40}}>
            <div class="form-outline">
              <input type="search" className="searchbar form-control " />
            </div>
            <button type="button" class=" btn btn-primary">Search</button>
          </div>
          <div class="btn-group">
         <Link to='/api'>   <button type="button" className="btn bg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className='text'> Login</span>
            </button></Link>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
          <div class="btn-group">
            <button type="button" className="btn  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             <span className='text'>More</span>
            </button>
            <div class="dropdown-menu ">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
          <div>
          <a href='#' className='text'>Cart</a>
          </div>

        </div>
      </div>
    </div>
   
  );
}

export default Header;
