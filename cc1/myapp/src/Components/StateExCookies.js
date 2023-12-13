import React from 'react'
import { useState, useEffect } from 'react'
const Wel=()=>{

    const [visible,setVisible] = useState(true);
    const toggle = () =>
    {
        setVisible(!visible)
    }
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setVisible(false);
        }, 50000);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, []); 
    return(
        <>
            {visible ?(
                <div className='card-wrapper' style={{ display: visible ? 'flex' : 'none' }}>
                    <div className='card'>
                        <p className='cookieHeading'>We use cookies.</p>
                        <p className='cookieDescription'>This website uses cookies to ensure you get the best experience on our website</p>
                        <div className='buttonContainer'>
                            <button className='acceptButton' onClick={toggle}>Allow</button>
                            <button className='declineButton' onClick={toggle}>Decline</button>
                        </div>
                    </div>
                </div>
            ) : (''
                // <button onClick={toggle}>Manage cookies</button>
            )
            }
        </>
    )
}
export default Wel;