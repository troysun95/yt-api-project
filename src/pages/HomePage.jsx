import { useDispatch, useSelector } from "react-redux";
import { getChannelList } from "../api/youtubeApi"
import { selectAccessToken } from "../features/slices/accessTokenSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { accessTokenRemove } from "../features/slices/accessTokenSlice";

const HomePage = ()=>{
    //檢查是否有效
    const navigate = useNavigate()
    const access_token = useSelector(selectAccessToken).accessTokenString;
    console.log('access_token in Redux',access_token) 


    const dispatch = useDispatch();
    const handleClick = async() =>{
        const lists = await getChannelList();
        console.log('lists', lists)
    }
    

    const clearToken =()=>{
        dispatch(accessTokenRemove())
    }

    useEffect(()=>{
        if(!access_token){
            //會跳兩次
            alert('驗證失效，請重新登入')
            navigate('/login')
        }
    },[navigate, access_token])
    
    
    return(
        <>
            <button onClick={handleClick}>getChannelList</button>
            <button onClick={clearToken}>clear access_token </button>
        </>
    )
}


export default HomePage