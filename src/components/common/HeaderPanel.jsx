import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import styles from "styles/common/HeaderPanel.module.scss";
//import mui icons
import {
    SmartDisplay, Menu, VideoCall, Notifications, NotificationsNoneOutlined
} from "@mui/icons-material";
import { closeMenu, openMenu, selectNavbar } from "features/slices/navbarSlice";
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserMenu from "./Navbar/UserMenu";
import { useUser } from "contexts/UserContext";
import clsx from "clsx";

const HeaderPanel = () => {
    const navbar = useSelector(selectNavbar);
    const navigate = useNavigate();
    const [activeIcon,setActiveIcon] = useState(null)
    const { userNow } = useUser();
    let isOpened = navbar.isMenuOpened;
    const dispatch = useDispatch();
    const handleClick = () => {
        isOpened ? dispatch(closeMenu()) : dispatch(openMenu());
    };
    
    const handleIconOpen = (e) => {
        const idClicked = e.currentTarget.id;
        setActiveIcon((prevActiveIcon) => (prevActiveIcon === idClicked ? null : idClicked)); // Toggle logic
    };


    useEffect(()=>{
    console.log(activeIcon)
    },[activeIcon])

    return (
        <div className={styles.headerPanel}>
            <div className={clsx(styles.brandContainer, { [styles.brandContainerClosed]: isOpened })}>
                <div
                    className={styles.menuToggler}
                    onClick={handleClick}
                >
                    <Menu />
                </div>
                <div className={styles.brand}>
                    <SmartDisplay
                        className={styles.brandIcon}
                        onClick={() => { navigate('/home') }}
                    />
                    <div className={styles.brandTitle}>YT API Project</div>
                </div>
            </div>
            <SearchBar />
            <div className={styles.headerIconContainer}>
                <div
                    id="video"
                    onClick={handleIconOpen}
                    className={styles.videoIcon}
                >
                    <VideoCall />
                </div>
                { activeIcon === "video" && (
                    <div className={styles.uploadMenu}>
                        <div>上傳影片</div>
                        <div>建立貼文</div>
                    </div>
                )}
                <div
                    className={styles.notifyIcon}
                    id="notifications"
                    onClick={handleIconOpen}
                >
                    {(activeIcon ==="notifications") ?
                        <Notifications /> :
                        <NotificationsNoneOutlined />
                    }
                </div>
                {activeIcon === "notifications" && (
                    <div className={styles.notifyMenu}></div>
                )}
                <div
                    className={styles.userMenuIcon}
                    id="user"
                    onClick={handleIconOpen}
                >
                    {userNow && userNow.length > 0 && (
                        <>
                            <img
                                className={styles.userAvatar}
                                src={userNow[0].snippet.thumbnails.default.url}
                                alt={userNow[0].snippet.title}
                            />
                        </>
                    )}
                </div>
                {( activeIcon === "user" && userNow && userNow.length > 0) && (
                    <UserMenu/>
                )}
            </div>
        </div>
    );
};

export default HeaderPanel;
