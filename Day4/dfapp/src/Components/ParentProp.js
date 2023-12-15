import ChildProp from "./ChildProp";
import '../Assests/Css/parentprop.css'
const ParentProp = () =>{
    const name1 = "Sangamithra M"
    const name2 = "Mithra"
    return(
        <>
        <ChildProp name = {name1}/>
        </>
    )
}
export default ParentProp