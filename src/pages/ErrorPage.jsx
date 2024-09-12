import { useNavigate } from "react-router-dom";

const ErrorPage =()=>{
    const navigate = useNavigate();

    return(
        <div>
            this is error page 
            <button onClick={()=>{navigate('/login')}}>click to go back login</button>
        </div>
    )
}

export default ErrorPage;