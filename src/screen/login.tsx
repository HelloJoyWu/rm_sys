import '../../res/css/login.scss'
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className='bodyBG'>
            <div className='showInfoBox'>
                <div className='imgBox'>
                    <img src='../../res/img/logo/login_logo.png' />
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