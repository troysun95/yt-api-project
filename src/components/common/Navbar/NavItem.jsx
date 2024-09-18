import {Link } from "react-router-dom";
import styles from "styles/common/Navbar.module.scss";

const NavItem = ({ 
  clickedId, 
  id, 
  iconClikced, 
  iconDefault, 
  title, 
  routerName,
  handleSetId
}) => {

  return (
    <div 
      id={id}
      className={styles.itemContainer} 
      onClick={handleSetId}
    >
      { iconClikced && iconDefault ? (
        clickedId === id ?(
            <div>{iconClikced}</div>
        ) : (
            <div>{iconDefault}</div>
        )
      ) : null}
      <span>{title}</span>
      <Link to={`${routerName}`}></Link>
    </div>
  )
};

export default NavItem;
