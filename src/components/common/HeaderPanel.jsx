import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import styles from "styles/common/HeaderPanel.module.scss"
//import mui icons
import {
    SmartDisplay, Menu, VideoCall,Notifications,NotificationsNoneOutlined
} from "@mui/icons-material";
import { closeMenu, openMenu, selectNavbar } from "features/slices/navbarSlice";
import {  useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import UserMenu from "./Navbar/UserMenu";
import { useUser } from "contexts/UserContext";

//id 自己設 , 同樣用 idClicked 
const HeaderPanel =()=>{
    const navbar = useSelector(selectNavbar);
    const navigate = useNavigate();
    const userNow = useUser();
    let isOpened = navbar.isMenuOpened;
    const [idClicked, setIdClicked] = useState(null);
    const dispatch =useDispatch();
    const handleClick =()=>{
        if(isOpened){
            dispatch(closeMenu())
        }else{
            dispatch(openMenu())
        }
        console.log('isOpened',isOpened)
    }

    const handleSetId = (e)=>{
        setIdClicked(e.currentTarget.id)
    }

    useEffect(()=>{
        console.log('idClicked',idClicked)
    },[idClicked])
    return(
        <div className={styles.headerPanel}>
            <div className={styles.brandContainer}>
                <div 
                    className={styles.menuToggler}
                    onClick={handleClick}    
                ><Menu/></div>
                <div className={styles.brand}>
                    <SmartDisplay 
                        className={styles.brandIcon}
                        onClick={()=>{navigate('/home')}}
                    />
                    <div className={styles.brandTitle}>YT API Project</div>
                </div>
            </div>
            <SearchBar/>
            <div className={styles.headerIconCotainer}>
                <div 
                    id="video"
                    onClick={handleSetId}
                    className={styles.vedioIcon}
                >
                    <VideoCall/>
                </div>
                {idClicked === "video" ? (
                    <div className={styles.uploadContainer}>
                        <div>上傳影片</div>
                        <div>建立貼文</div>
                    </div>
                    ):(
                        null
                    )
                }  
                <div 
                    className={styles.notifyIocn} 
                    id="notifications"
                    onClick={handleSetId}
                >
                    {
                    idClicked === "notifications" ? 
                        <Notifications/> 
                        : <NotificationsNoneOutlined/>
                    }
                </div>
                <div 
                    className={styles.userMenu}
                    id="user"
                    onClick={handleSetId}
                >
                    {(userNow && userNow.length) && (
                        <>
                            <img 
                                src={userNow.snippet.thumbnails.default.url} 
                                alt={userNow.snippet.title} 
                            />
                        </>
                    )}
                </div>
                <UserMenu 
                    idClicked={idClicked}
                    handleSetId={handleSetId}
                />
            </div>
        </div>
    )
}
export default HeaderPanel;