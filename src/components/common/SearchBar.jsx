import styles  from "styles/common/HeaderPanel.module.scss"
import { Search, ArrowBackOutlined} from "@mui/icons-material";
import { useState } from "react";
import clsx from "clsx";
const SearchBar = ( )=>{
    const [isInputShowed, setIsInputShowed] = useState(false);
    
    
    return(
        <div className={styles.searchBar}>
            <div className={clsx(styles.serchInputWrapperClosed, {[styles.serchInputWrapper]: isInputShowed})}>
                <div 
                    onClick={()=>setIsInputShowed(false)}
                    className={styles.arrowBack}
                >   
                    <ArrowBackOutlined/>
                </div>
                <div className={styles.searchInput}>

                    <input type="text" placeholder="搜尋" />   
                    <div className={styles.searchIcon}>
                        <Search/>
                    </div>

                </div>
                
            </div>
            <div 
                className={styles.searchToggler}
                onClick={()=>{setIsInputShowed(true)}}
            >
                <Search/>
            </div>
        </div>
    )
}

export default SearchBar;