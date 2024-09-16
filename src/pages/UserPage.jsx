import { useUser } from "contexts/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";

const UserPage = ()=>{
    const {userNow} =  useUser();
    const navigate = useNavigate();

    useEffect(()=>{
        if(userNow){
            console.log(userNow);
        }
    },[userNow,navigate])
    return(
        <div>
            <span>THis is Page of user~~
                {(userNow && userNow.length) && (
                    <>
                        <span>{userNow[0].snippet.title} </span>
                        123
                    </>
                )
                 }
            </span>
        </div>
    )
}

export default UserPage;