import styles from "styles/common/HeaderPanel.module.scss";import {
    LogoutOutlined, Settings, DarkModeOutlined,HelpOutline,
    ArrowBackOutlined,CheckOutlined, KeyboardArrowRightOutlined,
} from "@mui/icons-material"
import { useUser } from "contexts/UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";

const UserMenu =()=>{
    const navigate =useNavigate();
    const {userNow} = useUser();
    const [theme, setTheme] = useState("default-mode");
    const [isMenuMain, setIsMenuMain] = useState(true);
    const themeData = [{
        id:"equipment-based",
        title:"使用裝置主題"
    },{
        id:"dark-mode",
        title:"深色主題"
    },{
        id:"default-mode",
        title:"淺色主題"
    }]
    const handleSetTheme =(e)=>{
        e.stopPropagation();
        setTheme(e.currentTarget.id);
    }


    return(        
        <>
            {isMenuMain ? (
                // menu:mainPage
                <div className={styles.userMenuMain}>
                    <div className={styles.userProfile}>
                            <img 
                                src={userNow[0].snippet.thumbnails.default.url} 
                                alt={userNow[0].snippet.title} 
                            />
                            <div className={styles.userInfo}>
                                <span >{userNow[0].snippet.title}</span>
                                <span >{userNow[0].snippet.customUrl}</span>
                                <a href="/user">查看頻道</a>
                            </div>
                    </div>
                    <div className={styles.accountPanel}>
                        <div>Google 帳戶</div>
                        <div>切換帳戶</div>
                        <div> 
                            <LogoutOutlined style={{marginRight:"5px"}}/> 
                            登出
                        </div>
                    </div>
                    <div 
                        className={styles.themePanel}
                        onClick={()=>{setIsMenuMain(false)}}
                    >
                        <div className={styles.sidePageItem}> 
                            <DarkModeOutlined style={{marginRight:"5px"}}/> 
                            外觀：裝置主題
                            <div className={styles.sidePageIcon}>
                                <KeyboardArrowRightOutlined/>
                            </div>
                        </div>
                    </div>
                    <div 
                        className={styles.setting}
                        onClick={()=>{navigate('/setting')}}
                    >
                        <div>
                            <Settings style={{marginRight:"5px"}}/>
                            設定
                        </div>
                        <div>
                            <HelpOutline style={{marginRight:"5px"}}/>
                            說明
                        </div>
                    </div>
                </div>
                ):(
                    <div  className={styles.userMenuTheme}>
                        <div className={styles.header}>
                            <div 
                            onClick={()=>{setIsMenuMain(true)}} 
                            className={styles.prevPageIcon}

                            >
                                <ArrowBackOutlined/>
                            </div>
                            <h2>外觀</h2>
                        </div>
                        <h3>設定僅適用於這個瀏覽器</h3>
                            {themeData.map((item)=> 
                                <div 
                                    id={item.id}
                                    className={styles.item}
                                    onClick={handleSetTheme}
                                >
                                    <div className={styles.checkIcon}>
                                        {(item.id === theme) ? <CheckOutlined/> : ""}
                                    </div> 
                                    <span>{item.title}</span>
                                </div>)
                            }
                    </div>
                )
            }
                


        </>
        
        
            
    )
}

export default UserMenu;