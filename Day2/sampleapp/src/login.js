import './Assests/Css/login.css'
import Nav from './Components/nav'
function App(){
    return(
        <div>
            <nav class="navigation">
                <ul>
                    <li><a href="/regis">Registration </a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
           </nav>
            <form class="container">
             <h3>LOGIN PAGE</h3>
                <input type="text" className="input" name="Username" id="" placeholder="username"/>
                <input type="password" className="input"name="password" id="" placeholder="password"/>
                <input type="button"className="btn" value="SUBMIT"/>
            </form>
        </div>
    )
}
export default App