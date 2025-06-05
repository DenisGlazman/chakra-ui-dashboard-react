import {useNavigate} from "react-router-dom";
import './Documentation.css'

const Documentation=()=>{
    const navigate = useNavigate()
    const goToDashbord = () => {navigate('/')}
    return(

        <div  className="documentation_container">
        <h1>OUR DOCUMENTATION...</h1>
            <button className='docs' onClick={goToDashbord}>HOME PAGE</button>
        </div>)


}
export default Documentation;