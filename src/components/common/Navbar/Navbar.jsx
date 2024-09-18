import NavItem from "./NavItem";
import styles from "styles/common/Navbar.module.scss"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getChannelList } from "api/youtubeApi";
import ChannelItem from "./Channeltem";
import IconPanel from "./IconPanel";
//mui icons
import {
    Home, HomeOutlined,AppShortcut, AppShortcutOutlined, Subscriptions, SubscriptionsOutlined,
    FolderOpen, FolderOpenOutlined, History, HistoryOutlined,
    ListAlt, ListAltOutlined, WatchLater, WatchLaterOutlined,ThumbUpAlt,ThumbUpAltOutlined,
    DownloadDone, DownloadDoneOutlined, LocalFireDepartment, LocalFireDepartmentOutlined,
    MusicNote,MusicNoteOutlined,LocalMovies, LocalMoviesOutlined,LiveTv, LiveTvTwoTone,
    SportsEsports, SportsEsportsOutlined,Newspaper, NewspaperOutlined,EmojiEvents, EmojiEventsOutlined,
    School, SchoolOutlined, Podcasts,PodcastsOutlined,Settings, SettingsOutlined, Report, ReportGmailerrorredOutlined,
    Menu, SmartDisplay
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { selectNavbar, setIdClicked,closeMenu, openMenu } from "features/slices/navbarSlice";


const Navbar = ()=>{
    const navbar = useSelector(selectNavbar);
    const [channels, setChannels] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let isOpened = navbar.isMenuOpened;
    let clickedId = navbar.itemClickedId;
    const fetchChannelList =async()=>{
        try{
            const response = await getChannelList();
            setChannels(response);
            //console.log(response)
        }catch(err){
            console.error(err)
        }
    }

    const handleSetId =(e)=>{
        dispatch(setIdClicked(e.currentTarget.id));
        console.log('點擊對象 id setted:', e.currentTarget.id)
    }

    const handleToggeler = (e)=>{
        e.stopPropagation()
        if(isOpened){
            dispatch(closeMenu())
        }else{
            dispatch(openMenu())
        }
        console.log('isOpened',isOpened)
    }

    const navbarLinkData = {
        "topBlock":[
            {   
                "id":"n-1-1",
                "iconClicked": <Home/>,
                "iconDefault": <HomeOutlined/>,
                "title":"首頁",
                "routerName":"/home"
            }, {
                "id":"n-1-2",
                "iconClicked": <AppShortcut/>,
                "iconDefault": <AppShortcutOutlined/>,
                "title":"Shorts",
                "routerName":"/shorts"
            }, {
                "id":"n-1-3",
                "iconClicked": <Subscriptions/>,
                "iconDefault": <SubscriptionsOutlined/>,
                "title":"訂閱內容",
                "routerName":"/subscibe-channels"
            }
        ],"userCenter":[
            {
                "id":"n-2-1",
                "iconClicked": <FolderOpen/>,
                "iconDefault": <FolderOpenOutlined/>,
                "title":"你的頻道",
                "routerName":"/user-page/self"
            },{
                "id":"n-2-2",
                "iconClicked": <History/>,
                "iconDefault": <HistoryOutlined/>,
                "title":"觀看記錄",
                "routerName":"/records"
            },{
                "id":"n-2-3",
                "iconClicked": <ListAlt/>,
                "iconDefault": <ListAltOutlined/>,
                "title":"播放清單",
                "routerName":"/playlists"
            },{
                "id":"n-2-4",
                "iconClicked": <WatchLater/>,
                "iconDefault": <WatchLaterOutlined/>,
                "title":"稍後觀看",
                "routerName":"/watch-later"
            },{
                "id":"n-2-5",
                "iconClicked": <ThumbUpAlt/>,
                "iconDefault": <ThumbUpAltOutlined/>,
                "title":"喜歡的影片",
                "routerName":"/liked-vedios"
            },{
                "id":"n-2-6",
                "iconClicked": <DownloadDone/>,
                "iconDefault": <DownloadDoneOutlined/>,
                "title":"已下載的內容",
                "routerName":"/downloads"
            }
        ],"expolorePanel":[
            {
                "id":"n-3-1",
                "iconClicked": <LocalFireDepartment/>,
                "iconDefault": <LocalFireDepartmentOutlined/>,
                "title":"發燒影片",
                "routerName":"/explore/hot-videos"
            },{
                "id":"n-3-2",
                "iconClicked": <MusicNote/>,
                "iconDefault": <MusicNoteOutlined/>,
                "title":"音樂",
                "routerName":"/explore/music"
            },{
                "id":"n-3-3",
                "iconClicked": <LocalMovies/>,
                "iconDefault": <LocalMoviesOutlined/>,
                "title":"電影",
                "routerName":"/explore/movies"
            },{
                "id":"n-3-4",
                "iconClicked": <LiveTv/>,
                "iconDefault": <LiveTvTwoTone/>,      
                "title":"直播",
                "routerName":"/explore/live-streaming"
            },{
                "id":"n-3-5",
                "iconClicked": <SportsEsports/>,
                "iconDefault": <SportsEsportsOutlined/>,
                "title":"遊戲",
                "routerName":"/explore/games"
            },{
                "id":"n-3-6",
                "iconClicked": <Newspaper/>,
                "iconDefault": <NewspaperOutlined/>,
                "title":"新聞",
                "routerName":"/explore/news"
            },{
                "id":"n-3-7",
                "iconClicked": <EmojiEvents/>,
                "iconDefault": <EmojiEventsOutlined/>,
                "title":"體育",
                "routerName":"/explore/sports"
            },{
                "id":"n-3-8",
                "iconClicked": <School/>,
                "iconDefault": <SchoolOutlined/>,
                "title":"課程",
                "routerName":"/explore/lessons"
            },{
                "id":"n-3-9",
                "iconClicked": <Podcasts/>,
                "iconDefault": <PodcastsOutlined/>,
                "title":"Podcast",
                "routerName":"/explore/podcasts"
            }
        ],"bottomBlock":[
            {
                "id":"n-4-1",
                "iconClicked": <Settings/>,
                "iconDefault": <SettingsOutlined/>,
                "title": "設定",
                "routerName":"/settings"
            },{
                "id":"n-4-2",
                "iconClicked": <Report/>,
                "iconDefault": <ReportGmailerrorredOutlined/>,
                "title": "檢舉記錄",
                "routerName":"/reporting-reocrds"
            }
        ]
    }

    useEffect(()=>{
        fetchChannelList();
    },[navigate])

    return (
        <>
            <div className={styles.navbar}>
                {isOpened ? (
                    // Open, clsx: isOpened
                    <div className={styles.blocksWrapperOpen}>
                        <div className={styles.brandContainer}>
                            <div 
                                className={styles.menuToggler}
                                onClick={handleToggeler}    
                            >
                                <Menu />
                            </div>
                            <div className={styles.brand}>
                                <SmartDisplay 
                                    className={styles.brandIcon}
                                    onClick={()=>{navigate('/home')}}
                                    style={{fontSize:"40px", cursor:"pointer"}}
                                />
                                <div className={styles.brandTitle}>YT API Project</div>
                            </div>
                        </div>
                        <div className={styles.blockPannel}>
                            <div className="topBlock">
                                {navbarLinkData.topBlock.map((item)=>
                                    <NavItem 
                                        id={item.id}
                                        key={item.id}
                                        clickedId={clickedId}
                                        iconClikced={item.iconClicked}
                                        iconDefault={item.iconDefault}
                                        title={item.title}
                                        routerName={item.routerName}
                                        handleClick={handleSetId}
                                    />
                                )}
                            </div>
                            <div className={styles.divider}/>
                            <div className={styles.blockTitle}>個人中心</div>
                            <div className="userCenter">
                                {navbarLinkData.userCenter.map((item)=>
                                    <NavItem 
                                        id={item.id}
                                        key={item.id}
                                        clickedId={clickedId}
                                        iconClikced={item.iconClicked}
                                        iconDefault={item.iconDefault}
                                        title={item.title}
                                        routerName={item.routerName}
                                        handleClick={handleSetId}
                                    />
                                )}
                            </div>
                            <div className={styles.divider}/>
                            <div className={styles.blockTitle}>訂閱頻道</div>
                            <div className="subscribe-channels">
                                { channels && channels.length > 0 ? channels.map((item)=>
                                    <ChannelItem 
                                        key={item.id}
                                        id={item.id}
                                        url={item.snippet.thumbnails.default.url}
                                        title={item.snippet.title}
                                    />
                                ) : null}
                            </div>
                            <div className={styles.divider}/>
                            <div className={styles.blockTitle}>探索</div>
                            <div className="expolorePanel">
                                {navbarLinkData.expolorePanel.map((item)=>
                                    <NavItem 
                                        id={item.id}
                                        key={item.id}
                                        clickedId={clickedId}
                                        iconClikced={item.iconClicked}
                                        iconDefault={item.iconDefault}
                                        title={item.title}
                                        routerName={item.routerName}
                                        handleClick={handleSetId}
                                    />
                                )}
                            </div>
                            <div className={styles.divider}/>
                            <div className="bottomBlock">
                                {navbarLinkData.bottomBlock.map((item)=>
                                    <NavItem 
                                        id={item.id}
                                        key={item.id}
                                        clickedId={clickedId}
                                        iconClikced={item.iconClicked}
                                        iconDefault={item.iconDefault}
                                        title={item.title}
                                        routerName={item.routerName}
                                        handleClick={handleSetId}
                                    />
                                )}
                            </div> 
                            <div className={styles.footer}></div>
                        </div>
                    </div>
                ):(
                    //Close    
                    <IconPanel/>
                )}                    
            </div>
            
        </>
        
    )
}

export default Navbar;