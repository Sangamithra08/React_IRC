import '../Assests/Css/Dashboard.css'
import { Link } from 'react-router-dom'
const Dashboard=()=>{
    return(
        <>
        <body>
    <div>
        <h2>InteriorDesign</h2>
        <Link to="/Login1">Profile</Link>
        <Link to="/Login1">About</Link>
        <Link to="/Login1">Settings</Link>
        <Link to="/Login1">Log out</Link>
        <Link to="/Login1">Help & Support</Link>
    </div>
</body>
        </>
    )
}
export default Dashboard