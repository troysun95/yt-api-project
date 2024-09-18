import styles from "styles/HomePage/HomePage.module.scss"
import {  useSelector } from "react-redux";
import { selectAccessToken } from "../features/slices/accessTokenSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "components/common/Navbar/Navbar"
import HeaderPanel from "components/common/HeaderPanel";
const HomePage = ()=>{
    //檢查是否有效
    const navigate = useNavigate()
    const access_token = useSelector(selectAccessToken).accessTokenString;

    useEffect(()=>{
        if(!access_token){
            //會跳兩次
            alert('驗證失效，請重新登入')
            navigate('/login')
        }
    },[navigate, access_token])
    
    
    return(
        <div className={styles.homePage}>
            <HeaderPanel className={styles.headerPanel}/>
            <Navbar/>
        </div>
    )
}


export default HomePage