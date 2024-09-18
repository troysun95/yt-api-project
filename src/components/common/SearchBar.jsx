import styles  from "styles/common/HeaderPanel.module.scss"
import { Search } from "@mui/icons-material";
const SearchBar = ( )=>{
    return(
        <div className={styles.searchBar}>
            
            <div>
                <input type="text" />
            </div>
            <div 
                className={styles.searchIcon}
            >
                <Search/>
            </div>
        </div>
    )
}

export default SearchBar;