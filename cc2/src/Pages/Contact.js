import React from "react";
import { Link } from "react-router-dom";
import '../Assests/Css/contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faHome, faArrowRightFromBracket, faFileInvoice, faFileInvoiceDollar, faMoneyBill, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleTouchStart = (index) => {
        setHoveredIndex(index === hoveredIndex ? null : index);
    };

    const cardsData = [
        {
            frontImage: 'https://www.decoraid.com/wp-content/uploads/2018/07/Luxurious-interior-design-living-room-and-fireplace-in-a-beautiful-house-scaled.jpeg',
            title: 'Modern Interior Design Style',
            description: 'The home should be the treasure chest of living',
        },
        {
            frontImage: 'https://www.decoraid.com/wp-content/uploads/2021/05/transitional-interior-design-styles-2500x1666.jpg',
            title: 'Contemporary Interior Design Style',
            description: 'The home should be the treasure chest of living',
        },
        {
            frontImage: 'https://i.pinimg.com/originals/4f/04/35/4f0435e16129b1468ee3a95deea7af33.jpg',
            title: 'Art Moderne Interior Design Style',
            description: 'The home should be the treasure chest of living',
        },
        {
            frontImage: 'https://thedestinyformula.com/wp-content/uploads/2018/07/interior-paint-color-ideas.jpg',
            title: 'Mid-Century Interior Design Style',
            description: 'The home should be the treasure chest of living',
        },
        {
            frontImage: 'https://i.pinimg.com/originals/82/a5/f4/82a5f49b254c118f90702d53a8fe9f3c.jpg',
            title: 'Minimalist Interior Design Style',
            description: 'The home should be the treasure chest of living',
        },
        {
            frontImage: 'https://cdn.decorilla.com/online-decorating/wp-content/uploads/2019/06/contemporary-interior-design-style.jpg',
            title: 'Scandinavian Interior Design Style',
            description: 'The home should be the treasure chest of living',
        },
        {
            frontImage: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2018/10/modern-interior-designer-nyc.jpg',
            title: 'Shabby Chic Interior Design Style',
            description: 'The home should be the treasure chest of living',
        },
        {
            frontImage: 'http://thewowstyle.com/wp-content/uploads/2015/01/InteriorWallpapers-38.jpg',
            title: 'Farmhouse Interior Design Style',
            description: 'The home should be the treasure chest of living',
        },
    ];
    return (
        <>
            <div className="main-container">
                <div id="sidebar">
                    <ul className="ulstyles">
                        <li className="lstyle">
                            <Link to="#" className="astyle"><FontAwesomeIcon icon={faHome} />My Profile</Link>
                        </li>
                        <li className="lstyle">
                            <Link to="#" className="astyle"><FontAwesomeIcon icon={faMoneyBill} />My Designs</Link>
                        </li>
                        <li className="lstyle">
                            <Link to="#" className="astyle"><FontAwesomeIcon icon={faFileInvoiceDollar} />Achievements</Link>
                        </li>
                        <li className="lstyle">
                            <Link to="#" className="astyle"><FontAwesomeIcon icon={faCalendarWeek} />Accounts</Link>
                        </li>
                    </ul>
                    <div>
                        <button className="logout" ><FontAwesomeIcon icon={faArrowRightFromBracket} rotation={180} />Logout</button>
                    </div>
                </div>
               
                <div className="wrapper">
        <h1>My designs...</h1>
        <div className="cols">
          {cardsData.map((card, index) => (
            <div key={index} className={`col ${hoveredIndex === index ? 'hover' : ''}`} onTouchStart={() => handleTouchStart(index)}>
              <div className="a-container">
                <div className="front" style={{ backgroundImage: `url(${card.frontImage})` }}>
                  <div className="inner">
                    <p>{card.title}</p>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
            </div>
        </>
    );
}

export default Dashboard;
