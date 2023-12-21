import React from 'react'
import '../Assests/Css/Fund.css'
import { Link } from 'react-router-dom'
function Fund() {
    return (
        <>
            <nav className='sidebar'>
                <ul>
                    <Link to='/dashboard'><li><a href="#">DASHBOARD</a></li></Link>
                    <li><a href="#">PROBLEMS</a></li>
                    <li><a href="#">FUNDS</a></li>
                    <li><a href="#">IN DEMAND</a></li>
                    <li><a href="#">TOP DONATERS</a></li>
                    <li><a href="#">BENEFICIARIES</a></li>
                  
                </ul>
            </nav>


        </>
    )
}
export default Fund