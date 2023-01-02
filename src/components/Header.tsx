import { Link } from "react-router-dom";
import '../../res/css/header.scss'

const Header = () => {
    return (
        <nav className="munu">
            <ul className="munu--munuBox">
                <img src='../../res/img/logo/cq9.png' />
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