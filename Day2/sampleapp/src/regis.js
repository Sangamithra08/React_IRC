import './Assests/Css/regis.css'
function Regis()
{
    return(
        <div>
             <nav class="navigation">
                <ul>
                    <li><a href="regis.html">Registration</a></li>
                    <li><a href="login.html">Login</a></li>
                </ul>
             </nav>  
            <form class="container" onsubmit="confirm()">
                <h3>REGISTRATION FORM</h3>
                <input type="text" name="username" id="" placeholder="Enter your name" class="input"/>
                <input type="password" name="" id="oldpassword" placeholder="Enter password" class="input" />
                <input type="password" name="" id="newpassword" placeholder="Confirm password" class="input"/>
            <input type="email" name="" id="" placeholder="Enter your email" class="input"/>
            <input type="number" name="" id="" placeholder="Enter your age" class="input"/>
                <input type="submit" value="SUBMIT" class="btn"/>
            </form>
        </div>
    )
}
export default Regis;