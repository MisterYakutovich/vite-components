import { Link } from 'react-router-dom';
import ControllerForm from './ControllerForm';
import UncontrollForm from './UncontrollForm';

function Header() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`controller/form_1`}>
                <div>Controller</div>
              </Link>
            </li>
            <li>
              <Link to={`uncontroller/form_2`}>
                <div>Uncontroller</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
