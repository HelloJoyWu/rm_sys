import { Link } from "react-router-dom";
import '../../res/css/header.scss'
import cq9 from '../../res/img/logo/cq9.png'

const Header = () => {
    return (
        <nav className="munu">
            <ul className="munu--munuBox">
                <img src={cq9} />
                <li>jj
                    <ul>
                        <li>
                            <Link to="/slotAlert">slotAlert</Link>
                        </li>
                        <li>
                            <Link to="/slotRiskPlayer" >slotRiskPlayer</Link>

                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/slotRiskPlayer" >slotRiskPlayer</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;