import styles from "styles/common/HeaderPanel.module.scss";import {
    LogoutOutlined,MoodOutlined, Settings, HelpOutline
} from "@mui/icons-material"
import { useUserNow } from "contexts/userConetxt";

const UserMenu = ({idClicked,handleSetId})=>{
    const userNow = useUserNow();
    return(        
        <>
         {/* menu:user page */}
            {idClicked === "user" && (
                <div className={styles.userMenuContanier}>
                    <div className={styles.userProfile}>
                        {(userNow && userNow.length) &&(
                            <>
                            <img 
                                src={userNow.snippet.thumbnails.default.url} 
                                alt={userNow.snippet.title} 
                            />
                            <div className={styles.userInfo}>
                                <span >{userNow.snippet.title}</span>
                                <span >{userNow.snippet.customUrl}</span>
                                <a href="/user">查看頻道</a>
                            </div>
                            </>
                        ) }
                        
                        <div className={styles.accountPanel}>
                            <div>Google 帳戶</div>
                            <div>切換帳戶</div>
                            <div> 
                                <LogoutOutlined/> 
                                登出
                            </div>
                        </div>
                        <div 
                            id="themeSetting"
                            className={styles.themePanel}
                            onClick={handleSetId}
                        >
                            <div> 
                                <MoodOutlined/> 
                                外觀：裝置主題
                            </div>
                        </div>
                        <div className={styles.setting}>
                            <div>
                                <Settings/>
                                設定
                            </div>
                            <div>
                                <HelpOutline/>
                                說明
                            </div>
                        </div>
                    </div>
                </div>
                )}
            {/* menu:theme page */}
            {idClicked === "themeSetting" && (
                <div  className={styles.themePanel}>
                    <div className={styles.header}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>)
            }
        </>
        
        
            
    )
}

export default UserMenu;