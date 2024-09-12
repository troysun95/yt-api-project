import { useEffect } from "react";
import { getGoogleAuth } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../features/slices/accessTokenSlice";

const LoginPage =()=>{
    const navigate = useNavigate();
    const access_token = useSelector(selectAccessToken).accessTokenString
    const handleClick = ()=>{
        getGoogleAuth();
    }

    
    useEffect(()=>{
        if(access_token){
            navigate('/home')
        }else{
            console.log('尚未取得權限')
        }
        console.log('access_token:', access_token)
    },[navigate])
    return(
        <>
        <div>this is login page
            <button onClick={handleClick}>get auth </button>
        </div>
        
        </>
    )
}

export default LoginPage;