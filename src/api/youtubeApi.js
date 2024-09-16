import axios from "axios";
import store from "../features/store"
import { accessTokenRemove, selectAccessToken } from "../features/slices/accessTokenSlice";
const baseUrl = "https://www.googleapis.com/youtube/v3";

//axios.itercepters
const axiosInstance = axios.create({baseURL:baseUrl});
const dealWithErr = (err)=>{
    console.error(err.status, err.message);
        if(err.status === 401){
            //清空redux 內的 accessToken, 需要用 state 屬性執行
            store.dispatch(accessTokenRemove())
        }
}
const getRetriveToken =()=>{
   //改為從 redux 中提取,在非 react 元件內，需要用這個方法提取
    const state = store.getState();
    const accessToken = selectAccessToken(state).accessTokenString; 
    if(accessToken){
        return(accessToken)
    }else{
        console.log('no token retrived');
        return null;
    }
}

axiosInstance.interceptors.request.use(
    async (config) => {
        let currentToken = getRetriveToken();
        if(currentToken){
            try{
                //直接復職就好, 這一段也是要被！
                config.headers['Authorization'] = `Bearer ${currentToken}`;
            }catch(err){
                console.error(err)
            }
        }
        return config;
    },
    (error) => {
        console.error(error);
        throw error;
    }
)


export const getChannelList =async()=>{
    try{
        const response = await axiosInstance.get(`${baseUrl}/subscriptions`,{
            params: {
                part: "id,snippet", 
                mine: true,
                maxResults: 50,
              },
          });
        const channelsResouces = response.data.items;
        return channelsResouces
    }catch(err){
        dealWithErr()
    }
}


export const  getUserNow = async()=>{
    try{
        const response = await axiosInstance.get(`${baseUrl}/channels`,{
            params:{
                part:"id, snippet",
                mine:true,
            }
        });
        return response.data.items;
    }catch(err){
        dealWithErr()
    }
}