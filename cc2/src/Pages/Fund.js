import React from 'react'
import '../Assests/Css/Fund.css'
import { Link } from 'react-router-dom'
function Fund() {
    return (
        <>
            <nav className='sidebar'>
                <ul>
                    <Link to='/contact'><li className='side-text'><a href="#">DASHBOARD</a></li></Link>
                    <li className='side-text'><a href="#">PROBLEMS</a></li>
                    <li className='side-text'><a href="#">FUNDS</a></li>
                    <li className='side-text'><a href="#">IN DEMAND</a></li>
                    <li className='side-text'><a href="#">TOP DONATERS</a></li>
                    <li className='side-text'><a href="#">BENEFICIARIES</a></li>
                  
                </ul>
            </nav>


        </>
    )
}
export default Fund