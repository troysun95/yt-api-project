//import axios from "axios";

//endpoint 
const authUrl =  "https://accounts.google.com/o/oauth2/v2/auth";
const client_id	 = 	"495386334761-8un36hv656euou4sd4u3nngoibs9d9jc.apps.googleusercontent.com";
const redirect_uri = "http://localhost:3000/redirect";
const response_type = 'token';
const scope = "https://www.googleapis.com/auth/youtube.readonly";


export const getGoogleAuth = () => {
    //不使用呼叫, 改進入其他來源呼叫
    const authLink = `${authUrl}?scope=${encodeURIComponent(scope)}&client_id=${client_id}&state=pass-through&response_type=${response_type}&redirect_uri=${encodeURIComponent(redirect_uri)}`;
    window.location.href = authLink;
    //const popup = window.open(authLink, 'width=600,height=600');
    //then get the code in the url
};
