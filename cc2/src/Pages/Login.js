import { useState } from "react";
import { Navigate, useNavigate, Link } from 'react-router-dom';  // Import Link from 'react-router-dom'
import '../Assests/Css/login.css';

const Login = () => {
    // const navigate = useNavigate()
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const toggle = () => {
        setVisible(!visible);
    }

    const handleSignup = () => {
        navigate('/Signup')
    }
    const handleLogin = (e) => {
        e.preventDefault();

        if (data.username.trim() === '' || data.password.trim() === '') {
            alert('Username and password cannot be blank.');
        } else {
            alert(`Hello, ${data.username}`);
            setVisible(!visible);
            navigate('/');
        }
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <h2 className="heading-login">Login</h2>
                    <form onSubmit={handleLogin}>


                        <div className="user-box">
                            <input type="text" className="input" name="Username" id="username" placeholder="username" onChange={handleChange} />
                        </div>
                        <div className="user-box">
                            <input type="password" className="input" name="password" id="password" placeholder="password" onChange={handleChange} />
                        </div>



                        <div className="sub-main">
                            <div className="btn-last">
                                <Link to="/signup" className="submit-btn" onClick={handleLogin}>
                                    <input type="submit" value="Submit" />
                                </Link>
                                <br></br>
                                <div>
                                    <p> Don't have an account?
                                    <Link to="/Signup">Signup</Link></p>
                                </div>
                            </div>
                            <div className="btn-last">
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
