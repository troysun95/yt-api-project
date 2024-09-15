import { getUserNow } from "api/youtubeApi";
import { createContext,  useContext, useEffect,useState} from "react";
const UserContext =createContext();

export const UserProvider =({children})=>{
    const [userNow, setUserNow] = useState(null);
    const fetchUserNow =async()=>{
        try{
            const response = await getUserNow();
            setUserNow(response);
        }catch(err){
            console.error(err)
        }
    }
    useEffect(()=>{
        if(!userNow){
            fetchUserNow();
        }
    },[userNow])
    return(
        <UserContext.Provider
            value={{
                userNow,
                setUserNow,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}   

export const useUser =()=> useContext(UserContext);