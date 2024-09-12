import axios from "axios";
import store from "../features/store"
import { selectAccessToken } from "../features/slices/accessTokenSlice";
const baseUrl = "https://www.googleapis.com/youtube/v3";

//axios.itercepters
const axiosInstance = axios.create({baseURL:baseUrl});

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
            //寫不是放在請求主體，就是代表要放 url 參數ㄋ
            params: {
                part: "id,contentDetails,snippet,subscriberSnippet", // 需要包含 'part' 參數
                mine: true, // 查詢自己的訂閱頻道
              },
          });
        const channelsResouces = response.data.items;
        return channelsResouces
    }catch(err){
        console.error(err.status, err.message);
    }
}