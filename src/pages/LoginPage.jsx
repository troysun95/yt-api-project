import { useEffect } from "react";
import styles from "styles/LoginPage/LoginPage.module.scss"
import { getGoogleAuth } from "../api/auth";
import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../features/slices/accessTokenSlice";
const LoginPage =()=>{
    const navigate = useNavigate();
    const access_token = useSelector(selectAccessToken).accessTokenString
    const handleClick = ()=>{
        getGoogleAuth();
    }

    const handleOpenTab = ()=>{
        window.open("https://www.google.com/intl/zh-TW/account/about/")
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
        <div className={styles.loginPanel}>
            <h3>YT API Projet</h3>
            <button className={styles.getAuthBtn} onClick={handleClick}>點擊前往驗證</button>
            <div className={styles.divider}></div>
            <div className={styles.registerPanel}>
                <span>尚未有 goole 帳戶？</span>
                <button onClick={handleOpenTab}>前往申請帳戶</button>
            </div>
        </div>
    )
}

export default LoginPage;