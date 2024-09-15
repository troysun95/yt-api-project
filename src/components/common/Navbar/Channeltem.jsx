//import { useNavigate } from "react-router-dom";
import styles from "styles/common/Navbar.module.scss";

const ChannelItem = ({id, url, title, }) => {
  //const navigate = useNavigate();
  const handleNavigate = ()=>{
    console.log(`navigate to userPage of userId:${id}`)
  }
  return (
    <div
      id={id} 
      className={styles.itemContainer}
      onClick={handleNavigate}
    >
      <img src={url} alt={title} className="channelAvatar" />
      <span>{title}</span>
    </div>
  );
};

export default ChannelItem;
