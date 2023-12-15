import React from 'react'
import { useState } from 'react'
function Toggle(){
 const [visible , setVisible] = useState(false);
const Toggle = () =>{
    setVisible(!visible)
};

return(
    <>
        {visible ? <div>Visible</div> : ''}
        <button onClick={Toggle}>Show/Hide</button>
    </>
)
}
export default Toggle;