import styles from "styles/common/Navbar.module.scss"
import {
    Home, HomeOutlined,AppShortcut, AppShortcutOutlined,
    Subscriptions,SubscriptionsOutlined,AccountCircle, AccountCircleOutlined,
    DownloadDone, DownloadDoneOutlined,
} from "@mui/icons-material"

const IconPanel =({clickedId ,handleSetId})=>{
    
    const data = [{
        "id": "n-1-1",
        "title": "首頁",
        "iconClicked": <Home style={{fontSize:"50px"}}/>,
        "iconDefault": <HomeOutlined style={{fontSize:"50px"}}/>
    },{
        "id": "n-1-2",
        "title": "Shorts",
        "iconClicked": <AppShortcut style={{fontSize:"50px"}}/>,
        "iconDefault": <AppShortcutOutlined style={{fontSize:"50px"}}/>
    },{
        "id": "n-1-3",
        "title": "訂閱內容",
        "iconClicked": <Subscriptions style={{fontSize:"50px"}}/>,
        "iconDefault": <SubscriptionsOutlined style={{fontSize:"50px"}}/>
    },{
        "id": "n-5-1",
        "title": "個人中心",
        "iconClicked": <AccountCircle style={{fontSize:"50px"}}/>,
        "iconDefault": <AccountCircleOutlined style={{fontSize:"50px"}}/>
    },{
        "id": "n-2-6",
        "title": "已下載的內容",
        "iconClicked": <DownloadDoneOutlined style={{fontSize:"50px"}}/>,
        "iconDefault": <DownloadDone style={{fontSize:"50px"}}/>
    }]

    return(
        <div className={styles.iconPanel}>
            {data.map((item)=>
                <div 
                    key={`icon-${item.id} `}
                    id={item.id}
                    className={styles.iconItem}
                    onClick={handleSetId}
                >
                    {clickedId === item.id ?(item.iconClicked) : (item.iconDefault)}    
                    <span>{item.title}</span>                    
                </div>
            )}
        </div>
    )
}

export default IconPanel;