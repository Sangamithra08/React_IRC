import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../Assests/Css/login1.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const toggle = () => {
        setVisible(!visible);
    }

    const Login = (e) => {
        e.preventDefault();

        if (data.username.trim() === '' || data.password.trim() === '') {
            alert('Username and password cannot be blank.');
        } else {
            alert(`Hello, ${data.username}`);
            setVisible(!visible);
        }
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    return (
        <>
        <div>
            <nav className="navigation">
                <ul className="text">
                    <div className="heading">
                        <label className="name">Home</label>
                        <label className="name2">Design</label>
                    </div>
                    <li><Link to="#" onClick={toggle}>Login</Link></li>
                   <li><Link to="/Dashboard">Dashboard</Link></li> 
                   <li> <Link to="/Login1">About</Link></li>
                   <li> <Link to="/Login1">Contact</Link></li>
                </ul>
            </nav>
            
            {visible ? (

                    <div class="login-box">
                        <h2>Login</h2>
                        <form  onSubmit={Login}>
                            <div class="user-box">
                                <input type="text" className="input" name="Username" id="username" placeholder="username" onChange={handleChange} />
                            </div>
                            <div class="user-box">
                                <input type="password" className="input" name="password" id="password" placeholder="password" onChange={handleChange} />
                            </div>
                            <a href="">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                               <input type="submit"  value="Submit" /></a>
                                {/* <button className="cancel-btn" onClick={toggle}>Cancel</button> */}
                        </form>
                    </div>

            ) : null}
        </div>
                                                                                                                                                               <br></br><br></br><br></br><br></br><br></br> <br></br><br></br> <br></br> <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br> <br></br> <br></br> <br></br><br></br>  <br></br><br></br><br></br><br></br><br></br> <br></br><br></br> <br></br> <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br> <br></br> <br></br> <br></br><br></br>
        
        <footer className="footer">
            <div className="column">
                <h3 class="fhead">COMMUNITY</h3>
                    <p>Blog</p>
                    <p>Community</p>
                    <p>Ideas</p>
                    <p>Developers</p>
            </div>
            <div className="column">
                <h3 class="fhead">COMPANY</h3>
                    <p>About us</p>
                    <p>Team</p>
                    <p>Media</p>
                    <p>Affiliates</p>
                    <p>Contacts & Imprint</p>
            </div>
            <div className="column">
                <h3 class="fhead">USEFL LINKS</h3>
                    <p>Warranty</p>
                    <p>Product Declarations</p>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                    <p>Cookie policy</p>
            </div>
      </footer>
        </>
    )
}
export default NavBar;
