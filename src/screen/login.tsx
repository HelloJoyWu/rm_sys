import '../../res/css/login.scss'
import { Link } from "react-router-dom";
import login_logo from '../../res/img/logo/login_logo.png'


const Login = () => {
    return (
        <div className='bodyBG'>
            <div className='showInfoBox'>
                <div className='imgBox'>
                    <img src={login_logo} />
                </div>


                <input
                    type='text'
                    className='textInputBox'
                    placeholder='email or username'
                />
                <input
                    type='password'
                    className='textInputBox'
                    placeholder='password'
                />

                <button className='loginBtn'>
                    <Link to="/slotAlert" className='loginBtn--showText'>LOG IN</Link>

                </button>
            </div>
        </div>
    )


}

export default Login