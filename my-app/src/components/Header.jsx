import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faMicrophone } from '@fortawesome/free-solid-svg-icons';


function Header () {
  return (
    <header className='Header'>
        <nav className='Navbar'>
            <Link to='/./'>
                <FontAwesomeIcon icon={faAngleLeft} className='Icon FirstIcon'/>
            </Link>
            <h1>STUDIO GHIBLI FILMES</h1>
            <div className='IconContainer'>
                <FontAwesomeIcon icon={faMicrophone} className='Icon'/>
                {/* <FontAwesomeIcon icon={faGear} className='Icon LastIcon'/> */}
            </div>
        </nav>
    </header>
  );
}

export default Header;